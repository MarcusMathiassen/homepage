import $ from './query'

import { mat4 } from 'gl-matrix'
import Particle from './particle'
import { v2, v4 } from './math'
import {
    HSLtoRGBA,
    getTime,
    Rect,
    getMinAndMaxPosition,
    getExt,
    addButton,
    addProgressBar,
} from './utility'
import Quadtree from './quadtree'
import ZingTouch from 'zingtouch'
import { AssertionError } from 'assert'
;(exports => {
    let viewportSize = 0

    let gAttribLocationProjMtx

    let parent
    let gl

    let vao
    let vbo
    let program

    let positionAttribLocation = 0
    let colorAttribLocation = 1

    let comparisons = 0
    let hits = 0

    let devicePixelRatio

    let tree = []
    let backColor = { r: 255, g: 255, b: 255 }
    let frontColor = { r: 255, g: 255, b: 255 }
    let canvasWidth = 300
    let canvasHeight = 300
    let canvas

    let enableCollision = true
    let showNodes = false
    let useQuadtree = true
    let useOptimizedBounds = false
    let paused = false
    let showInfopanel = true
    let enableGravity = false

    let quadtreeBounds
    let allBounds = []

    var fc = 0
    var lastFps = 60

    let mouse = {
        x: 0,
        y: 0,
    }

    let particles = []
    let particleColors = []
    let particleSize = 8
    let particleColor = { r: 1, g: 1, b: 1, a: 1 }

    let boundsHighlightColor = { r: 0, g: 1, b: 0, a: 1 }
    let highlightColor = { r: 1, g: 1, b: 0, a: 1 }

    exports.attachTo = id => {
        const el = $('<canvas>')
        el.id = `${id}-canvas`
        el.textContent = 'webgl canvas placeholder'

        parent = $(`#${id}`)
        parent.appendChild(el)
        parent.addEventListener('mousemove', updateMousePos)

        let activeRegion = ZingTouch.Region(parent)

        activeRegion.bind(parent, 'pan', () => {
            spawnParticle()
        })

        // We dont want the mouse to lock on to the last edge it touched.
        parent.addEventListener('mouseleave', event => {
            mouse = { x: -999999, y: -999999 }
        })

        canvas = el

        activeRegion.bind(parent, 'expand', event => {
            console.log(event)
            particleSize = event.deltaY
        })
        // parent.addEventListener('mousewheel', event => {
        //     console.log(event)
        //     particleSize = event.deltaY
        // })

        startWebGL()
    }

    class Shader {
        constructor() {
            this.name
            this.isLinked = false

            this.shaders = []
            this.uniformsMap = new Map()
            this.attribsMap = new Map()

            this.program
            this.sources = []
            this.attribs = []
            this.uniforms = []
        }
        destroy() {
            gl.deleteProgram(this.program)
        }
        createShader(source, type) {
            this.sources.push(source)
            let shader
            switch (type) {
                case 'vertex':
                    shader = gl.createShader(gl.VERTEX_SHADER)
                    break
                case 'fragment':
                    shader = gl.createShader(gl.FRAGMENT_SHADER)
                    break
                case 'geometry':
                    shader = gl.createShader(gl.GEOMETRY_SHADER)
                    break
                case 'compute':
                    shader = gl.createShader(gl.COMPUTE_SHADER)
                    break
            }
            gl.compileShader(shader)
            return shader
        }

        link() {
            gl.linkProgram(this.program)
            gl.validateProgram(this.program)

            for (const { name, shader } of shaders) {
                gl.detachShader(this.program, shader)
                gl.deleteShader(shader)
            }
            this.isLinked = true

            for (const uniform in this.uniforms) {
                uniformsMap.set(
                    uniform,
                    gl.getUniformLocation(this.program, uniform)
                )
            }
        }
        bind() {
            gl.useProgram(this.program)
        }

        finish() {
            this.program = gl.createProgram()

            for (const source of this.sources) {
                const ext = getExt(source)

                let shader
                switch (ext) {
                    case 'vert':
                        shader = this.createShader(source, 'vertex')
                        break
                    case 'frag':
                        shader = this.createShader(source, 'fragment')
                        break
                    case 'geom':
                        shader = this.createShader(source, 'geometry')
                        break
                    case 'comp':
                        shader = this.createShader(source, 'compute')
                        break
                }
                gl.attachShader(this.program, shader)
                shaders.push(shader)
            }

            let i = 0
            for (const attrib of this.attribs) {
                uniformsMap.set(uniform, i)
                gl.bindAttribLocation(this.program, i, attrib)
                i++
            }

            this.link()
        }

        setUniform2f(name, x, y) {
            gl.uniform2f(uniformsMap.get(name), x, y)
        }
        setUniform3f(name, x, y, z) {
            gl.uniform3f(uniformsMap.get(name), x, y, z)
        }
        setUniform2f(name, v) {
            gl.uniform2f(uniformsMap.get(name), v.x, v.y)
        }
        setUniform3f(name, v) {
            gl.uniform3f(uniformsMap.get(name), v.x, v.y, v.z)
        }
        setUniform4f(name, v) {
            gl.uniform4f(uniformsMap.get(name), v.x, v.y, v.z, v.w)
        }
        setUniformMatrix4fv(name, m) {
            gl.uniformMatrix4fv(uniformsMap.get(name), 1, gl.FALSE, m[0][0])
        }
        setUniformMatrix3fv(name, m) {
            gl.uniformMatrix3fv(uniformsMap.get(name), 1, gl.FALSE, m[0][0])
        }
        setUniform1f(name, val) {
            gl.uniform1f(uniformsMap.get(name), val)
        }
        setUniform1i(name, val) {
            gl.uniform1i(uniformsMap.get(name), val)
        }
    }

    class VBO {
        constructor() {
            this.handle = 0
            this.data = 0
            this.dataSize = 0
            this.usage = 0
            this.dataMemberCount = 0
            this.stride = 0
            this.pointer = 0
            this.divisor = 0
            this.isMatrix = false
            this.attribNum = 0
        }
    }

    class Buffer {
        constructor() {
            this.vao
            this.vbos = new Map()
            this.attribCounter = 0
        }
        update(name, data, dataSize) {
            gl.bindVertexArray(this.vao)
            let vbo = vbos.find(name)

            gl.bindBuffer(vbo)
            if (dataSize > vbo.dataSize) {
                gl.bufferData(vbo.type, dataSize, data, vbo.usage)
                vbo.dataSize = dataSize
            } else {
                gl.bufferSubData(vbo.type, 0, vbo.dataSize, data)
            }
        }

        destroy() {
            gl.deleteVertexArray(vao)

            for (const { name, vbo } of vbos) {
                gl.deleteBuffer(vbo)
            }
        }
        bind() {
            gl.bindVertexArray(this.vao)
        }
        finish() {
            this.vao = gl.createVertexArray()
            this.bind()

            for (const { name, vbo } of vbos) {
                vbo = gl.createBuffer()

                if (vbo.hasData) {
                    gl.bufferData(vbo.type, vbo.dataSize, vbo.data, vbo.usage)
                }

                if (!vbo.isMatrix) {
                    gl.enableVertexAttribArray(vbo.attribNum)
                    gl.vertexAttribPointer(
                        vbo.attribNum,
                        vbo.dataMemberCount,
                        gl.FLOAT,
                        gl.FALSE,
                        vbo.stride,
                        vbo.pointer
                    )
                    if (vbo.divisor) {
                        glVertexAttribDivisor(vbo.attrib_num, vbo.divisor)
                    }
                } else {
                    for (let i = 0; i < vbo.dataMemberCount; i++) {
                        gl.enableVertexAttribArray(i + vbo.attribNum)
                        gl.vertexAttribPointer(
                            i + vbo.attribNum,
                            vbo.dataMemberCount,
                            gl.FLOAT,
                            gl.FALSE,
                            vbo.stride,
                            i * vbo.pointer
                        )
                        if (vbo.divisor) {
                            gl.vertexAttribDivisor(
                                i + vbo.attribNum,
                                vbo.divisor
                            )
                        }
                    }
                }
            }
        }
    }

    class CommandBuffer {
        constructor() {
            this.primitiveCount = -1
            this.first = 0
            this.count = 0
            this.hasIndices = false
            this.type = gl.TRIANGLES
        }
        commit() {
            if (this.primitiveCount != -1) {
                if (this.hasIndices) {
                    gl.drawElementsInstanced(
                        this.type,
                        this.count,
                        gl.UNSIGNED_SHORT,
                        0,
                        this.primitiveCount
                    )
                } else {
                    gl.drawArraysInstanced(
                        this.type,
                        this.first,
                        this.count,
                        this.primitiveCount
                    )
                }
            } else {
                if (this.hasIndices) {
                    gl.drawElements(this.type, this.count, gl.UNSIGNED_SHORT, 0)
                } else {
                    gl.drawArrays(this.type, this.first, this.count)
                }
            }
        }
    }

    class Renderer {
        constructor() {
            this.name = ''
            this.shader = new Shader()
            this.buffer = new Buffer()
        }
        updateBuffer(name, data, dataSize) {
            this.buffer.bind()
            this.buffer.update(name, data, dataSize)
        }
        bind() {
            this.buffer.bind()
            this.shader.bind()
        }
        draw(cmd) {
            cmd.commit()
        }
        makeShader() {
            return this.shader
        }
        makeBuffer(name) {
            this.buffer.vbos.get(name).attribNum = this.buffer.attribCounter++
            return this.buffer.vbos.get(name)
        }
        finish() {
            this.shader.finish()
            this.buffer.finish()
        }
    }

    class ParticleSystem {
        constructor() {
            this.particleCount = 0
            this.positions = []
            this.velocities = []
            this.sizes = []
            this.colors = []

            this.vertices = []
            this.indices = []

            this.numVerticesPerParticle = 36
            this.renderer = new Renderer()

            // Add indices
            for (let n = 0; n < this.numVerticesPerParticle - 2; ++n) {
                this.indices[n] = 0
                this.indices[n + 1] = n + 1
                this.indices[n + 2] = n + 2
            }

            // Add vertices
            for (let i = 0; i < this.numVerticesPerParticle; ++i) {
                const cont = (i * Math.PI * 2) / this.numVerticesPerParticle
                this.vertices[i] = new v2(Math.cos(cont), Math.sin(cont))
            }

            let vs_src = `
    precision mediump float;

    attribute vec2 vertices;

    attribute vec2 position;
    attribute vec4 color;
    attribute float radius;

    uniform vec2 viewport_size;

    varying vec4 color0;

    void main() {
        vec2 pos = ((radius * vertices + position) / viewport_size * 2.0) - 1.0;
        gl_Position = vec4(pos, 0.0, 1.0);
        color0 = color;
    }
    `
            let fs_src = `
    precision mediump float;
    varying vec4 color0;
    void main() {
      gl_FragColor = color0;
    }`

            let shader = this.renderer.makeShader()
            shader.sources = [
                'default_particle_shader.vert',
                'default_particle_shader.frag',
            ]
            shader.attribs = ['vertices', 'position', 'color', 'radius']
            shader.uniforms = ['viewport_size']

            let vertex_buffer = this.renderer.makeBuffer('vertices')
            vertex_buffer.data = vertices
            vertex_buffer.dataSize =
                this.vertices.length * Float32Array.BYTES_PER_ELEMENT
            vertex_buffer.dataMemberCount = 2
            vertex_buffer.type = gl.ARRAY_BUFFER
            vertex_buffer.usage = gl.STATIC_DRAW

            let position_buffer = this.renderer.makeBuffer('position')
            position_buffer.dataMemberCount = 2
            position_buffer.type = gl.ARRAY_BUFFER
            position_buffer.usage = gl.DYNAMIC_DRAW
            position_buffer.divisor = 1

            let color_buffer = this.renderer.makeBuffer('color')
            color_buffer.dataMemberCount = 4
            color_buffer.type = gl.ARRAY_BUFFER
            color_buffer.usage = gl.DYNAMIC_DRAW
            color_buffer.divisor = 1

            let radius_buffer = this.renderer.makeBuffer('radius')
            radius_buffer.dataMemberCount = 1
            radius_buffer.type = gl.ARRAY_BUFFER
            radius_buffer.usage = gl.DYNAMIC_DRAW
            radius_buffer.divisor = 1

            // auto &indices_buffer = renderer.make_buffer("indices");
            // indices_buffer.data = &indices[0];
            // indices_buffer.dataSize = indices.size() * sizeof(indices[0]);
            // indices_buffer.type = buffer_type::element_array;

            renderer.finish()
        }

        update() {
            for (let i = 0; i < this.particleCount; i++) {
                this.positions[i].add(this.velocities[i])
            }
        }

        draw() {
            let cmdBuffer = new CommandBuffer()
            cmdBuffer.type = gl.TRIANGLE_FAN
            cmdBuffer.count = this.numVerticesPerParticle
            cmdBuffer.primitive_count = this.particleCount
            this.renderer.bind()
            this.renderer.shader.setUniform2f(
                'viewport_size',
                new v2(canvasWidth, canvasHeight)
            )
            this.renderer.draw(cmdBuffer)
        }
        // Update the gpu buffers incase of more particles..
        updateGPUBuffers() {
            if (this.position.length != 0) {
                this.renderer.updateBuffer(
                    'position',
                    this.position,
                    this.positions.length * Float32Array.BYTES_PER_ELEMENT * 2
                )
            }
            if (this.color.length != 0) {
                this.renderer.updateBuffer(
                    'color',
                    this.color,
                    this.color.length * Float32Array.BYTES_PER_ELEMENT * 4
                )
            }
            if (this.radius.length != 0) {
                this.renderer.updateBuffer(
                    'radius',
                    this.radius,
                    this.radius.length * Float32Array.BYTES_PER_ELEMENT
                )
            }
        }
    }
    function resolveCollisions(particles) {
        let comparisons = 0
        let hits = 0
        const particleCount = particles.length
        for (let i = 0; i < particleCount; i++) {
            for (let j = i + 1; j < particleCount; j++) {
                if (particles[i].collidesWith(particles[j])) {
                    particles[i].resolveCollision(particles[j])
                    hits++
                }
                comparisons++
            }
        }

        return {
            comparisons: comparisons,
            hits: hits,
        }
    }

    function resolveCollisionsQuadtree(particles, tree) {
        let comparisons = 0
        let hits = 0
        for (const node of tree) {
            const nodeCount = node.length
            for (let i = 0; i < nodeCount; i++) {
                for (let j = i + 1; j < nodeCount; j++) {
                    if (particles[node[i]].collidesWith(particles[node[j]])) {
                        particles[node[i]].resolveCollision(particles[node[j]])
                        hits++
                    }
                    comparisons++
                }
            }
        }
        return {
            comparisons: comparisons,
            hits: hits,
        }
    }

    let extractRGB = function(str) {
        const rgb = str
            .substring(4, str.length - 1)
            .replace(/ /g, '')
            .split(',')

        return {
            r: rgb[0],
            g: rgb[1],
            b: rgb[2],
        }
    }

    const normalize = rgba => {
        return {
            r: rgba.r / 255,
            g: rgba.g / 255,
            b: rgba.b / 255,
            a: rgba.a || rgba.a / 255,
        }
    }

    let updateValues = function() {
        canvasWidth = parent.offsetWidth
        canvasHeight = 300

        var desiredCSSWidth = canvasWidth
        var desiredCSSHeight = canvasHeight
        devicePixelRatio = window.devicePixelRatio || 1

        canvas.width = desiredCSSWidth * devicePixelRatio
        canvas.height = desiredCSSHeight * devicePixelRatio

        canvas.style.width = desiredCSSWidth + 'px'
        canvas.style.height = desiredCSSHeight + 'px'

        canvasWidth *= devicePixelRatio
        canvasHeight *= devicePixelRatio

        // console.log(canvasWidth, canvasHeight)

        frontColor = normalize(window.color.textNormal)
        frontColor.a = 1

        backColor = normalize(window.color.backgroundContent)
        backColor.a = 1

        boundsHighlightColor = normalize(window.color.textRicher)
        boundsHighlightColor.a = 1

        // console.log(frontColor)
        // console.log(backColor)
        // console.log(boundsHighlightColor)
    }

    const erase = () => {
        particles.length = 0
        particleColors.length = 0
    }

    const drawUI = () => {
        // Show the cursor as a hollow circle with the current selected size.
        drawHollowCircle(
            mouse,
            frontColor,
            getParticleSize(),
            0.5 * devicePixelRatio,
            36
        )
        updateUI(showInfopanel)
    }
    const baseLineComparisons = () => {
        const n = particles.length
        return (n * (n - 1)) / 2
    }
    const comparisonsDelta = () => {
        return baseLineComparisons() / comparisons
    }
    function addUI() {
        const ul = $('<ul>')
        ul.id = `${parent.id}-info`
        ul.className = 'demo-info-list'
        console.log(ul)
        parent.insertBefore(ul, canvas)
    }

    function updateUI(show = true, fontSize = 14) {
        const ul = $(`#${parent.id}-info`)
        ul.innerHTML = ''
        ul.style = `font-size: ${fontSize}px; display: ${
            show ? 'inline' : 'none'
        };`
        const labels = [
            `FPS: ${lastFps}`,
            `Particles: ${particles.length}`,
            `Comparisons: ${comparisons}(${comparisonsDelta().toFixed(0)}x)`,
        ]

        for (const label of labels) {
            const l = $('<li>')
            l.textContent = label
            l.className = 'demo-info-list-element'
            ul.appendChild(l)
        }
    }

    function startWebGL() {
        const div = $('<div>')
        div.id = `${parent.id}-settings`
        parent.append(div)

        addUI()

        addButton({
            label: 'clear',
            className: 'btn',
            callback: erase,
            parent: div.id,
        })

        addButton({
            label: 'quadtree',
            className: 'btn',
            callback: () => {
                useQuadtree ^= 1
            },
            parent: div.id,
        })
        addButton({
            label: 'optimized quadtree bounds',
            className: 'btn',
            callback: () => {
                useOptimizedBounds ^= 1
            },
            parent: div.id,
        })
        addButton({
            label: 'show quadtree nodes',
            className: 'btn',
            callback: () => {
                showNodes ^= 1
            },
            parent: div.id,
        })
        addButton({
            label: 'collisions',
            className: 'btn',
            callback: () => {
                enableCollision ^= 1
            },
            parent: div.id,
        })
        addButton({
            label: 'gravity',
            className: 'btn',
            callback: () => {
                enableGravity ^= 1
            },
            parent: div.id,
        })
        addButton({
            label: 'info',
            className: 'btn',
            callback: () => {
                showInfopanel ^= 1
            },
            parent: div.id,
        })
        addButton({
            label: 'pause',
            className: 'btn',
            callback: () => {
                paused ^= 1
            },
            parent: div.id,
        })

        gl = canvas.getContext('webgl2')

        if (!gl) {
            alert(
                'Unable to initialize WebGL. Your browser may not support it.'
            )
            return
        }

        gl.enable(gl.BLEND)
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)

        // let particleSystem = new ParticleSystem()

        program = gl.createProgram()
        let vs = gl.createShader(gl.VERTEX_SHADER)
        let fs = gl.createShader(gl.FRAGMENT_SHADER)

        let vs_src = `
    precision mediump float;

    uniform mat4 projectionMatrix;
    attribute vec2 position;
    attribute vec4 color;

    varying vec4 color0;

    void main() {
        gl_Position = projectionMatrix * vec4(position, 0.0, 1.0);
        color0 = color;
    }
    `

        let fs_src = `
    precision mediump float;
    varying vec4 color0;
    void main() {
      gl_FragColor = color0;
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

        gl.bindAttribLocation(program, positionAttribLocation, 'position')
        gl.bindAttribLocation(program, colorAttribLocation, 'color')

        gl.linkProgram(program)
        gl.validateProgram(program)

        gAttribLocationProjMtx = gl.getUniformLocation(
            program,
            'projectionMatrix'
        )

        gl.deleteShader(vs)
        gl.deleteShader(fs)

        vao = gl.createVertexArray()
        gl.bindVertexArray(vao)

        vbo = gl.createBuffer()
        gl.bindBuffer(gl.ARRAY_BUFFER, vbo)

        gl.vertexAttribPointer(
            positionAttribLocation,
            2,
            gl.FLOAT,
            gl.FALSE,
            6 * Float32Array.BYTES_PER_ELEMENT,
            0
        )
        gl.vertexAttribPointer(
            colorAttribLocation,
            4,
            gl.FLOAT,
            gl.FALSE,
            6 * Float32Array.BYTES_PER_ELEMENT,
            2 * Float32Array.BYTES_PER_ELEMENT
        )

        gl.enableVertexAttribArray(positionAttribLocation)
        gl.enableVertexAttribArray(colorAttribLocation)

        animate()
    }

    let vertices = []

    function drawTriangle(positions, color, size) {
        addVertices([
            -size + positions.x,
            -size + positions.y,
            color.r,
            color.g,
            color.b,
            color.a,
            positions.x,
            size + positions.y,
            color.r,
            color.g,
            color.b,
            color.a,
            size + positions.x,
            -size + positions.y,
            color.r,
            color.g,
            color.b,
            color.a,
        ])
    }

    function drawRectRange(min, max, color) {
        addVertices([
            min.x,
            max.y,
            color.r,
            color.g,
            color.b,
            color.a,
            max.x,
            max.y,
            color.r,
            color.g,
            color.b,
            color.a,
            max.x,
            min.y,
            color.r,
            color.g,
            color.b,
            color.a,

            min.x,
            max.y,
            color.r,
            color.g,
            color.b,
            color.a,
            max.x,
            min.y,
            color.r,
            color.g,
            color.b,
            color.a,
            min.x,
            min.y,
            color.r,
            color.g,
            color.b,
            color.a,
        ])
    }
    const drawHollowRectRange = (min, max, color, borderWidth) => {
        const hborderw = borderWidth * 0.5

        const topleft = new v2(min.x, max.y)
        const topright = max
        const bottomright = new v2(max.x, min.y)
        const bottomleft = min

        drawRectRange(
            v2.subs(topleft, hborderw),
            v2.adds(topright, hborderw),
            color
        )
        drawRectRange(
            v2.adds(topright, hborderw),
            v2.subs(bottomright, hborderw),
            color
        )
        drawRectRange(
            v2.adds(bottomright, hborderw),
            v2.subs(bottomleft, hborderw),
            color
        )
        drawRectRange(
            v2.adds(bottomleft, hborderw),
            v2.subs(topleft, hborderw),
            color
        )
    }
    const drawHollowRect = (position, color, size, borderWidth) => {
        const hborderw = borderWidth * 0.5
        const min = v2.subs(position, size)
        const max = v2.adds(position, size)

        const topleft = new v2(min.x, max.y)
        const topright = max
        const bottomright = new v2(max.x, min.y)
        const bottomleft = min

        drawRectRange(
            v2.subs(topleft, hborderw),
            v2.adds(topright, hborderw),
            color
        )
        drawRectRange(
            v2.adds(topright, hborderw),
            v2.subs(bottomright, hborderw),
            color
        )
        drawRectRange(
            v2.adds(bottomright, hborderw),
            v2.subs(bottomleft, hborderw),
            color
        )
        drawRectRange(
            v2.adds(bottomleft, hborderw),
            v2.subs(topleft, hborderw),
            color
        )
    }
    function drawRect(position, color, size) {
        addVertices([
            -size + position.x,
            size + position.y,
            color.r,
            color.g,
            color.b,
            color.a,
            size + position.x,
            size + position.y,
            color.r,
            color.g,
            color.b,
            color.a,
            size + position.x,
            -size + position.y,
            color.r,
            color.g,
            color.b,
            color.a,

            -size + position.x,
            size + position.y,
            color.r,
            color.g,
            color.b,
            color.a,
            size + position.x,
            -size + position.y,
            color.r,
            color.g,
            color.b,
            color.a,
            -size + position.x,
            -size + position.y,
            color.r,
            color.g,
            color.b,
            color.a,
        ])
    }

    const drawHollowCircle = (
        position,
        color,
        size,
        borderWidth,
        num_vertices
    ) => {
        let p1 = new v2(position.x + size, position.y)
        let p2
        const TWO_PI = Math.PI * 2
        for (let i = 1; i <= num_vertices + 3; i += 2) {
            const t = (i * TWO_PI) / num_vertices
            p2 = new v2(
                position.x + size * Math.cos(t),
                position.y + size * Math.sin(t)
            )
            drawLine(p1, p2, color, borderWidth)
            p1 = p2
        }
    }

    function drawLine(p1, p2, color, size) {
        if (size < 0.0) size = 0.001

        // drawRect(p1, { r: 1, g: 0, b: 1, a: 1 }, size) // DEBUG
        // drawRect(p2, { r: 1, g: 1, b: 0, a: 1 }, size) // DEBUG

        // Get the distance between our two points
        let d = v2.distance(p1, p2) * 0.5

        let dx = p2.x - p1.x
        let dy = p2.y - p1.y

        // Get the angle between our two points (radians)
        let theta = Math.atan2(dy, dx)

        // Draw the end caps
        // drawHalfCircle(p1, color, size, theta + Math.PI / 2, 12)
        // drawHalfCircle(p2, color, size, theta - Math.PI / 2, 12)

        let s = size

        let center = v2.add(p1, p2).scale(0.5)
        // drawRect(center, { r: 1, g: 0, b: 0, a: 1 }, 0.1) // DEBUG

        // Draw center debug rects
        let bot = { x: center.x - d + s, y: center.y }
        let top = { x: center.x + d - s, y: center.y }
        // drawRect(bot, { r: 1, g: 0, b: 1, a: 1 }, size) // DEBUG
        // drawRect(top, { r: 1, g: 0, b: 1, a: 1 }, size) // DEBUG

        // Rotate
        const min = v2.subs(bot, s)
        const max = v2.adds(top, s)

        // drawRectRange(min, max, { r: 1, g: 1, b: 1, a: 1 }) // DEBUG

        // P1 and P2 should be min and max

        const pos2 = [
            new v2(min.x, max.y),
            new v2(max.x, max.y),
            new v2(max.x, min.y),
            new v2(min.x, max.y),
            new v2(max.x, min.y),
            new v2(min.x, min.y),
        ]

        const cth = Math.cos(theta)
        const sth = Math.sin(theta)

        for (let p of pos2) {
            // cx, cy - center of square coordinates
            // x, y - coordinates of a corner point of the square
            // theta is the angle of rotation

            // translate point to origin
            const tempX = p.x - center.x
            const tempY = p.y - center.y

            // now apply rotation
            const rotatedX = tempX * cth - tempY * sth
            const rotatedY = tempX * sth + tempY * cth

            // translate back
            p.x = rotatedX + center.x
            p.y = rotatedY + center.y
        }

        addVertices([
            pos2[0].x,
            pos2[0].y,
            color.r,
            color.g,
            color.b,
            color.a,
            pos2[1].x,
            pos2[1].y,
            color.r,
            color.g,
            color.b,
            color.a,
            pos2[2].x,
            pos2[2].y,
            color.r,
            color.g,
            color.b,
            color.a,
            pos2[3].x,
            pos2[3].y,
            color.r,
            color.g,
            color.b,
            color.a,
            pos2[4].x,
            pos2[4].y,
            color.r,
            color.g,
            color.b,
            color.a,
            pos2[5].x,
            pos2[5].y,
            color.r,
            color.g,
            color.b,
            color.a,
        ])
    }

    const drawHalfCircle = (center, color, radius, angle, numVertex) => {
        // Since each vertex consists of 3 points.
        const n_vertices = numVertex * 3

        // Setup the particle vertices
        let verts = []

        // Start out by setting the last inserted vertex to our center
        let last_vert = center

        let k = 0
        for (let i = 0; i < n_vertices + 3; ++i) {
            // Pos
            switch (k) {
                case 0:
                    k += 1
                    verts.push(last_vert.x)
                    verts.push(last_vert.y)
                    break
                case 1:
                    k += 1
                    const cont = angle + ((i - 1) * Math.PI) / n_vertices
                    const x = Math.cos(cont)
                    const y = Math.sin(cont)
                    last_vert = new v2(
                        center.x + radius * x,
                        center.y + radius * y
                    )
                    verts.push(last_vert.x)
                    verts.push(last_vert.y)
                    break
                case 2:
                    k = 0
                    verts.push(center.x)
                    verts.push(center.y)
                    break
                default:
                    k = 0
                    break
            }

            // Color
            verts.push(color.r)
            verts.push(color.g)
            verts.push(color.b)
            verts.push(color.a)
        }
        addVertices(verts)
    }

    function drawCircle(center, color, size, num_vertices) {
        // Setup the particle vertices
        let verts = []

        let last_vert = center

        let k = 0
        for (let i = 0; i < num_vertices + 3; ++i) {
            switch (k++) {
                case 0:
                    verts.push(last_vert.x)
                    verts.push(last_vert.y)
                    break
                case 1:
                    const t = (i * Math.PI * 2.0) / num_vertices
                    last_vert = {
                        x: center.x + size * Math.cos(t),
                        y: center.y + size * Math.sin(t),
                    }
                    verts.push(last_vert.x)
                    verts.push(last_vert.y)
                    break
                case 2:
                    k = 0
                    verts.push(center.x)
                    verts.push(center.y)
                    break
            }

            verts.push(color.r)
            verts.push(color.g)
            verts.push(color.b)
            verts.push(color.a)
        }
        // console.log(verts.length, num_vertices)
        addVertices(verts)
    }

    function getRelativeMousePosition(event, target) {
        target = target || event.target
        const rect = target.getBoundingClientRect()

        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
        }
    }

    function updateMousePos(event, target) {
        target = target || event.target
        let pos = getRelativeMousePosition(event, target)

        pos.x *= devicePixelRatio
        pos.y *= devicePixelRatio

        mouse = pos
    }

    function addVertices(verts) {
        // Update our vertices
        vertices.push(...verts)
    }

    function getMousePosInViewspace() {
        const x = mouse.x
        const y = mouse.y

        const w = canvasWidth
        const h = canvasHeight

        return {
            x: -1.0 + (2 * x) / w / devicePixelRatio,
            y: 1.0 - (2 * y) / h / devicePixelRatio,
        }
    }

    function drawAllParticles() {
        const particleCount = particles.length
        for (let i = 0; i < particleCount; ++i) {
            const particle = particles[i]
            const position = particle.position
            const radius = particle.radius
            const color = particleColors[i]
            drawCircle(position, color, radius, 36)
            drawHollowCircle(
                position,
                backColor,
                radius,
                0.3 * devicePixelRatio,
                36
            )
            particleColors[i] = {
                r: frontColor.r,
                g: frontColor.g,
                b: frontColor.b,
                a: 1,
            }
        }
    }

    function spawnParticle() {
        const size = getParticleSize()
        for (let i = 0; i < 2; ++i) {
            let particle = new Particle(mouse.x, mouse.y, size)
            particles.push(particle)
            particleColors.push(particleColor)
        }
    }

    function toViewspace(v) {
        const w = canvasWidth
        const h = canvasHeight

        return {
            x: -1.0 + (2 * v.x) / w / devicePixelRatio,
            y: 1.0 - (2 * v.y) / h / devicePixelRatio,
        }
    }

    const getParticleSize = () => {
        return particleSize * devicePixelRatio
    }

    function animate() {
        updateValues()
        gl.clearColor(backColor.r, backColor.g, backColor.b, 1.0)
        gl.clear(gl.COLOR_BUFFER_BIT)

        const time = getTime()
        if (useQuadtree) {
            let min = new v2(0, 0)
            let max = new v2(canvasWidth, canvasHeight)

            if (useOptimizedBounds) {
                const temp = getMinAndMaxPosition(particles)
                min = temp.min
                max = temp.max
            }

            quadtreeBounds = new Rect(min, max)
            const quadtree = new Quadtree(0, quadtreeBounds)

            quadtree.input(particles)

            allBounds = []
            quadtree.getNodesBounds(allBounds)

            tree = []
            quadtree.getIndices(tree)

            if (showNodes) {
                for (const bound of allBounds) {
                    const x = bound.min.x
                    const y = bound.min.y
                    const width = bound.max.x - bound.min.x - 1
                    const height = bound.max.y - bound.min.y - 1
                    drawHollowRectRange(
                        new v2(x, y),
                        new v2(x + width, y + height),
                        frontColor,
                        1 * devicePixelRatio
                    )
                }
            }
            let neighbours = []
            quadtree.getNeighbourNodes(neighbours, {
                position: mouse,
                radius: getParticleSize(),
            })

            neighbours.forEach(node => {
                // Draw the bound
                const bound = node.bounds
                const x = bound.min.x
                const y = bound.min.y
                const width = bound.max.x - bound.min.x - 1
                const height = bound.max.y - bound.min.y - 1
                drawHollowRectRange(
                    new v2(x, y),
                    new v2(x + width, y + height),
                    boundsHighlightColor,
                    3 * devicePixelRatio
                )
                // Draw the particles
                node.indices.forEach(index => {
                    particleColors[index] = boundsHighlightColor
                })
            })
        }

        if (enableCollision) {
            let res
            if (useQuadtree) {
                res = resolveCollisionsQuadtree(particles, tree)
            } else {
                res = resolveCollisions(particles)
            }
            comparisons = res.comparisons
            hits = res.hits
        }

        if (!paused) {
            const gravityY = enableGravity ? 0.0981 : 0.0
            for (let particle of particles) {
                particle.update(
                    {
                        width: canvasWidth,
                        height: canvasHeight,
                    },
                    { x: 0.0, y: gravityY }
                )
            }
        }

        const col = HSLtoRGBA(Math.cos(time * 0.3) * 360, 70, 50)

        drawAllParticles()
        draw()
        drawUI()

        window.requestAnimationFrame(animate)
    }

    function draw() {
        if (vertices.length === 0) return

        const displaySize = new v2(canvasWidth, canvasHeight)

        // Setup viewport, orthographic projection matrix
        gl.viewport(0, 0, canvasWidth, canvasHeight)
        const ortho_projection = mat4.fromValues(
            2.0 / displaySize.x,
            0.0,
            0.0,
            0.0,
            0.0,
            2.0 / -displaySize.y,
            0.0,
            0.0,
            0.0,
            0.0,
            -1.0,
            0.0,
            -1.0,
            1.0,
            0.0,
            1.0
        )
        gl.useProgram(program)
        gl.uniformMatrix4fv(gAttribLocationProjMtx, gl.FALSE, ortho_projection)
        gl.bindVertexArray(vao)
        gl.bindBuffer(gl.ARRAY_BUFFER, vbo)
        gl.bufferData(
            gl.ARRAY_BUFFER,
            new Float32Array(vertices),
            gl.DYNAMIC_DRAW
        )

        // Finally draw the vertices
        gl.drawArrays(gl.TRIANGLES, 0, vertices.length / 6)

        console.log('vertices', vertices.length)
        console.log('particles', particles.length)

        vertices = []
    }
})(window)
