import $ from './query'

import Particle from './particle'
import { v2, v4 } from './math'
import { getTime, Rect, getMinAndMaxPosition, getExt } from './utility'
import Quadtree from './quadtree'
import ZingTouch from 'zingtouch'

let viewportSize = 0

let canvas
let gl

let vao
let vbo
let program

let positionAttribLocation = 0
let colorAttribLocation = 1

let backbackColor
let backColor
let frontColor
let canvasWidth = 300
let canvasHeight = 300
let devicePixelRatio

let aspectRatio = canvasHeight / canvasWidth

let comparisons = 0
let hits = 0

let tree = []

let enableCollision = true
let showNodes = true
let useQuadtree = true
let useOptimizedBounds = true
let paused = false
let showInfopanel = false
let enableGravity = false

let quadtreeBounds
let allBounds = []

let particles = []
let particleColors = []
let particleSize = 0.06
let particleColor = { r: 1, g: 1, b: 1, a: 1 }

const boundsHighlightColor = { r: 0, g: 1, b: 0, a: 1.0 }
const highlightColor = { r: 1, g: 1, b: 0, a: 1.0 }

export const attachTo = id => {
    let element = $(`#${id}`)
    element.addEventListener('mousemove', updateMousePos)

    let activeRegion = ZingTouch.Region(element)

    activeRegion.bind(element, 'pan', () => {
        spawnParticle()
    })

    // We dont want the mouse to lock on to the last edge it touched.
    element.addEventListener('mouseleave', event => {
        mouse = { x: -999999, y: -999999 }
    })

    canvas = element
    startWebGL()
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

let updateValues = function() {
    canvasWidth = canvas.offsetWidth
    canvasHeight = canvas.offsetHeight
    const style = window.getComputedStyle($('.post-content')[0])

    aspectRatio = canvasHeight / canvasWidth
    viewportSize = new v2(canvasWidth, canvasHeight)

    backColor = extractRGB(style.backgroundColor)
    frontColor = extractRGB(style.color)

    const elem = $('body')[0]
    backbackColor = extractRGB(window.getComputedStyle(elem).backgroundColor)
}

function startWebGL() {
    updateValues()
    devicePixelRatio = window.devicePixelRatio || 1

    // canvasWidth = canvasWidth * devicePixelRatio
    // canvasHeight = canvasHeight * devicePixelRatio

    canvas.style.width = canvasWidth + 'px'
    canvas.style.height = canvasHeight + 'px'

    gl = canvas.getContext('webgl2') || canvas.getContext('experimental-webgl')

    if (!gl) {
        alert('Unable to initialize WebGL. Your browser may not support it.')
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

    attribute vec2 position;
    attribute vec4 color;

    varying vec4 color0;

    void main() {
        gl_Position = vec4(position, 0.0, 1.0);
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
        console.error('ERROR compiling vertex shader!', gl.getShaderInfoLog(vs))
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
        (-size + positions.x) * aspectRatio,
        -size + positions.y,
        color.r,
        color.g,
        color.b,
        color.a,
        positions.x * aspectRatio,
        size + positions.y,
        color.r,
        color.g,
        color.b,
        color.a,
        (size + positions.x) * aspectRatio,
        -size + positions.y,
        color.r,
        color.g,
        color.b,
        color.a,
    ])
}

function drawRectRange(min, max, color) {
    addVertices([
        min.x * aspectRatio,
        max.y,
        color.r,
        color.g,
        color.b,
        color.a,
        max.x * aspectRatio,
        max.y,
        color.r,
        color.g,
        color.b,
        color.a,
        max.x * aspectRatio,
        min.y,
        color.r,
        color.g,
        color.b,
        color.a,

        min.x * aspectRatio,
        max.y,
        color.r,
        color.g,
        color.b,
        color.a,
        max.x * aspectRatio,
        min.y,
        color.r,
        color.g,
        color.b,
        color.a,
        min.x * aspectRatio,
        min.y,
        color.r,
        color.g,
        color.b,
        color.a,
    ])
}

function drawRect(position, color, size) {
    addVertices([
        (-size + position.x) * aspectRatio,
        size + position.y,
        color.r,
        color.g,
        color.b,
        color.a,
        (size + position.x) * aspectRatio,
        size + position.y,
        color.r,
        color.g,
        color.b,
        color.a,
        (size + position.x) * aspectRatio,
        -size + position.y,
        color.r,
        color.g,
        color.b,
        color.a,

        (-size + position.x) * aspectRatio,
        size + position.y,
        color.r,
        color.g,
        color.b,
        color.a,
        (size + position.x) * aspectRatio,
        -size + position.y,
        color.r,
        color.g,
        color.b,
        color.a,
        (-size + position.x) * aspectRatio,
        -size + position.y,
        color.r,
        color.g,
        color.b,
        color.a,
    ])
}

function drawLine(p1, p2, color, size) {
    if (size < 0.0) size = 0.001

    // drawRect(p1, { r: 1, g: 0, b: 1, a: 1 }, size) // DEBUG
    // drawRect(p2, { r: 1, g: 1, b: 0, a: 1 }, size) // DEBUG

    drawCircle(p1, color, size, 36)
    drawCircle(p2, color, size, 36)

    let d = v2.distance(p1, p2) / 2

    let dx = p2.x - p1.x
    let dy = p2.y - p1.y

    let theta = Math.atan2(dy, dx)

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

    let pos2 = [
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
        p.x = (rotatedX + center.x) * aspectRatio
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

function drawCircle(center, color, size, num_vertices) {
    // @Hack
    num_vertices *= 3

    // Setup the particle vertices
    let verts = []

    let k0 = new v4(1, 0, 0, 1)
    let k1 = new v4(0, 1, 0, 1)
    let k2 = new v4(0, 0, 1, 1)

    let white = new v4(1, 1, 1, 1)

    let last_vert = center

    let k = 0
    for (let i = 0; i < num_vertices * 3; ++i) {
        switch (k++) {
            case 0:
                white = k0
                verts.push(last_vert.x * aspectRatio)
                verts.push(last_vert.y)

                break
            case 1:
                white = k1
                last_vert = {
                    x:
                        center.x +
                        size * Math.cos((i * Math.PI * 2.0) / num_vertices),
                    y:
                        center.y +
                        size * Math.sin((i * Math.PI * 2.0) / num_vertices),
                }
                verts.push(last_vert.x * aspectRatio)
                verts.push(last_vert.y)
                break
            case 2:
                white = k2
                k = 0
                verts.push(center.x * aspectRatio)
                verts.push(center.y)
                break
        }

        verts.push(color.r)
        verts.push(color.g)
        verts.push(color.b)
        verts.push(color.a)
    }

    addVertices(verts)
}

let mouse = {
    x: 0,
    y: 0,
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
    console.log(mouse)
}

function addVertices(verts) {
    // Update our vertices
    vertices.push(...verts)

    // Update our vbo
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.DYNAMIC_DRAW)
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
    // p.stroke(backColor.r, backColor.g, backColor.b)
    // p.strokeWeight(0.5)
    for (let i = 0; i < particleCount; i++) {
        const particle = particles[i]
        const position = particle.position
        const radius = particle.radius
        const color = particleColors[i]
        drawCircle(toViewspace(position), color, radius, 36)
        particleColor[i] = {
            r: frontColor.r,
            g: frontColor.g,
            b: frontColor.b,
            a: 1,
        }
    }
}

function spawnParticle() {
    let particle = new Particle(mouse.x, mouse.y, particleSize)
    particles.push(particle)
    particleColors.push(particleColor)
}

function toViewspace(v) {
    const w = canvasWidth
    const h = canvasHeight

    return {
        x: -1.0 + (2 * v.x) / w / devicePixelRatio,
        y: 1.0 - (2 * v.y) / h / devicePixelRatio,
    }
}

function animate() {
    updateValues()
    gl.clearColor(
        backColor.r / 255.0,
        backColor.g / 255.0,
        backColor.b / 255.0,
        1.0
    )
    gl.clear(gl.COLOR_BUFFER_BIT)

    frontColor.r /= 255
    frontColor.g /= 255
    frontColor.b /= 255
    frontColor.a = 1.0

    const white = { r: 1, g: 1, b: 1, a: 1 }
    const red = { r: 1.0, g: 0.0, b: 0.0, a: 1.0 }

    // drawRect(mousePos, frontColor, 0.3)
    // drawTriangle(mousePos, red, 0.1)
    // drawCircle(mousePos, frontColor, 0.05, 36)

    const time = getTime()

    const col = {
        r: Math.cos(time * 1.4),
        g: Math.sin(time * 0.4),
        b: 1,
        a: 1,
    }
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
            // p.noFill()
            // p.stroke(frontColor.r, frontColor.g, frontColor.b)
            // p.strokeWeight(1)

            for (const bound of allBounds) {
                const x = bound.min.x
                const y = bound.min.y
                const width = bound.max.x - bound.min.x - 1
                const height = bound.max.y - bound.min.y - 1
                // p.rect(x, y, width, height)
            }
            let neighbours = []
            quadtree.getNeighbourNodes(neighbours, {
                position: mouse,
                radius: particleSize,
            })

            // p.push()
            neighbours.forEach(node => {
                // Draw the bound
                const bound = node.bounds
                const x = bound.min.x
                const y = bound.min.y
                const width = bound.max.x - bound.min.x - 1
                const height = bound.max.y - bound.min.y - 1
                // p.stroke(
                // boundsHighlightColor.r,
                // boundsHighlightColor.g,
                // boundsHighlightColor.b
                // )
                // p.strokeWeight(2.0)
                // p.rect(x, y, width, height)

                // Draw the particles
                node.indices.forEach(index => {
                    particleColors[index] = { r: 0, g: 1, b: 0, a: 1 }
                })
            })
            // p.pop()
        }
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
    drawLine(new v2(0, 0), mouse, frontColor, 0.05)
    drawLine(mouse, new v2(Math.sin(time), Math.sin(time * 2.0)), col, 0.05)
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
    drawAllParticles()
    draw()

    window.requestAnimationFrame(animate)
}

function draw() {
    if (vertices.length === 0) return
    gl.useProgram(program)
    gl.bindVertexArray(vao)
    gl.drawArrays(gl.TRIANGLES, 0, vertices.length / 6)
    // console.log(`vertices doc{vertices.length / 6}`)
    vertices = []
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
                        gl.vertexAttribDivisor(i + vbo.attribNum, vbo.divisor)
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
