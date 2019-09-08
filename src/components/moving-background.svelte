<style>
canvas {
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index: -999;
}
</style>

<canvas id="moving-background"></canvas>

<script>

    import { onMount } from 'svelte'
    import jq from './utils/query'

    import Particle from './utils/particle'
    import { v2, mat4 } from './utils/math'
    import { getTime, Rect, getMinAndMaxPosition, addButton } from './utils/utility'
    import Quadtree from './utils/quadtree'

    let backColor = { r: 255, g: 255, b: 255 }
    let frontColor = { r: 255, g: 0, b: 255 }
    let boundsHighlightColor = { r: 0, g: 1, b: 0, a: 1 }
    let highlightColor = { r: 1, g: 1, b: 0, a: 1 }

    let gl
    let vao
    let vbo = new Map()
    let program

    let gAttribLocationViewportSize = 4

    let verticesAttribLocation = 0
    let positionsAttribLocation = 1
    let colorsAttribLocation = 2
    let sizesAttribLocation = 3

    let canvas
    let canvasWidth = 300
    let canvasHeight = 300

    let numVerticesPerCircle = 36
    let primitiveCount = 0
    let vertices = []
    let positions = []
    let colors = []
    let sizes = []

    let velocities = []

    function updateValues () {
        canvasWidth = window.innerWidth
        canvasHeight = window.innerHeight

        var desiredCSSWidth = canvasWidth
        var desiredCSSHeight = canvasHeight
        devicePixelRatio = window.devicePixelRatio || 1

        canvas.width = desiredCSSWidth * devicePixelRatio
        canvas.height = desiredCSSHeight * devicePixelRatio

        canvas.style.width = desiredCSSWidth + 'px'
        canvas.style.height = desiredCSSHeight + 'px'

        canvasWidth *= devicePixelRatio
        canvasHeight *= devicePixelRatio
    }

    function draw() {
        updateValues()

        for (let i = 0; i < primitiveCount * 2; i += 2) {
            let posx = positions[i]
            let posy = positions[i+1]

            let velx = velocities[i]
            let vely = velocities[i+1]

            let size = sizes[i / 2 - 1]

            if (posx >= canvasWidth - size) {
                posx = canvasWidth - size
                velx = -velx
            }
            if (posx <= size) {
                posx = size
                velx = -velx
            }
            if (posy >= canvasHeight - size) {
                posy = canvasHeight - size
                vely = -vely
            }
            if (posy <= size) {
                posy = size
                vely = -vely
            }

            posx += velx * 0.05
            posy += vely * 0.05

            positions[i] = posx
            positions[i+1] = posy

            velocities[i] = velx
            velocities[i+1] = vely
        }

        gl.clearColor(0,0,0, 1.0)
        gl.clear(gl.COLOR_BUFFER_BIT)

        // Setup viewport, orthographic projection matrix
        gl.viewport(0, 0, canvasWidth, canvasHeight)

        gl.useProgram(program)
        gl.bindVertexArray(vao)

        let vbo_v = vbo.get('positions')
        gl.bindBuffer(gl.ARRAY_BUFFER, vbo_v)
        gl.bufferSubData(gl.ARRAY_BUFFER, 0, new Float32Array(positions), 0, 0)

        gl.uniform2f(gAttribLocationViewportSize, canvasWidth, canvasHeight)

        const type = gl.TRIANGLE_FAN
        const first = 0
        const count = numVerticesPerCircle
        const primitive_count = primitiveCount

        gl.drawArraysInstanced(type, first, count, primitive_count)

        window.requestAnimationFrame(draw)
    }

    onMount(() => {
        canvas = document.getElementById("moving-background")
        gl = canvas.getContext("webgl2")

        if (!gl) {
            alert(
                'Unable to initialize WebGL. Your browser may not support it.'
            )
            return
        }

        gl.enable(gl.BLEND)
        gl.blendEquation(gl.FUNC_ADD)
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)

        program = gl.createProgram()
        let vs = gl.createShader(gl.VERTEX_SHADER)
        let fs = gl.createShader(gl.FRAGMENT_SHADER)

        let vs_src = `#version 300 es
        precision mediump float;

        in vec2     vertices;
        in vec2     position;
        in vec4     color;
        in float    size;

        uniform vec2 viewport_size;

        out vec4 color0;

        void main() {
            vec2 pos = (((size * vertices + position) / viewport_size) * 2.0) - 1.0;
            gl_Position = vec4(pos, 0.0, 1.0);
            color0 = color;
        }
        `

        let fs_src = `#version 300 es
        precision mediump float;
        in vec4 color0;
        out vec4 frag;
        void main() {
            frag = color0;
        }`

        gl.shaderSource(vs, vs_src)
        gl.shaderSource(fs, fs_src)

        gl.compileShader(vs)
        if (!gl.getShaderParameter(vs, gl.COMPILE_STATUS)) {
            console.error(
                'ERROR compiling vertex shader!',
                gl.getShaderInfoLog(vs)
            )
            return
        }

        gl.compileShader(fs)
        if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
            console.error(
                'ERROR compiling fragment shader!',
                gl.getShaderInfoLog(fs)
            )
            return
        }

        gl.attachShader(program, vs)
        gl.attachShader(program, fs)

        gl.bindAttribLocation(program, verticesAttribLocation, 'vertices')
        gl.bindAttribLocation(program, positionsAttribLocation, 'position')
        gl.bindAttribLocation(program, colorsAttribLocation, 'color')
        gl.bindAttribLocation(program, sizesAttribLocation, 'size')

        gl.linkProgram(program)
        gl.validateProgram(program)

        gAttribLocationViewportSize = gl.getUniformLocation(program, 'viewport_size')

        gl.deleteShader(vs)
        gl.deleteShader(fs)

        vao = gl.createVertexArray()
        gl.bindVertexArray(vao)

        gl.enableVertexAttribArray(verticesAttribLocation)
        gl.enableVertexAttribArray(positionsAttribLocation)
        gl.enableVertexAttribArray(colorsAttribLocation)
        gl.enableVertexAttribArray(sizesAttribLocation)

        // Add vertices
        for (let i = 0; i < numVerticesPerCircle; ++i) {
            const cont = i * Math.PI * 2 / numVerticesPerCircle
            vertices.push(Math.cos(cont), Math.sin(cont))
        }
        const randFloat = (min, max) => {
            return Math.random() * (max - min) + min
        }

        const spawnParticle = () => {
            positions.push(randFloat(0, canvasWidth), randFloat(0, canvasHeight))
            colors.push(randFloat(0,1),randFloat(0,1),randFloat(0,1),randFloat(0,1))
            sizes.push(randFloat(5,10))
            velocities.push(randFloat(-10, 10), randFloat(-10, 10))
            primitiveCount += 1
        }

        updateValues()
        for (let i = 0; i < 1000; ++i)
            spawnParticle()

        const createArrayBuffer = (loc, data, data_members, target, usage, divisor = 0) => {
            const vbo = gl.createBuffer()
            gl.bindBuffer(target, vbo)
            gl.bufferData(target, data, usage)
            gl.vertexAttribPointer(loc, data_members, gl.FLOAT, false, 0, 0)
            gl.enableVertexAttribArray(loc)
            if (divisor !== 0) {
                gl.vertexAttribDivisor(loc, divisor)
            }
            return vbo
        }

        vbo.set('vertices', createArrayBuffer(
            verticesAttribLocation,
            new Float32Array(vertices),
            2,
            gl.ARRAY_BUFFER,
            gl.STATIC_DRAW
        ))
        vbo.set('positions', createArrayBuffer(
            positionsAttribLocation,
            new Float32Array(positions),
            2,
            gl.ARRAY_BUFFER,
            gl.DYNAMIC_DRAW,
            1
        ))
        vbo.set('colors', createArrayBuffer(
            colorsAttribLocation,
            new Float32Array(colors),
            4,
            gl.ARRAY_BUFFER,
            gl.DYNAMIC_DRAW,
            1
        ))
        vbo.set('sizes', createArrayBuffer(
            sizesAttribLocation,
            new Float32Array(sizes),
            1,
            gl.ARRAY_BUFFER,
            gl.DYNAMIC_DRAW,
            1
        ))

        draw()
    })

</script>
