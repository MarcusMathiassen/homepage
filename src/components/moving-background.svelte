<style lang="sass">

canvas
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    z-index: -999

</style>

<template lang="pug">

canvas(bind:this='{canvas}')

</template>

<script>

import { onMount } from 'svelte'

import { v2, mat4 } from './utils/math'
import { randFloat } from './utils/utility'

export let movingBackgroundOptions

let startTime = 0
let textColor
let backColor

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

let bindTo = 'moving-background'
let numVerticesPerCircle = 36
let desiredPrimitiveCount = movingBackgroundOptions.count
let particleSize = movingBackgroundOptions.particleSize
let initFunc = movingBackgroundOptions.init
let updateFunc = movingBackgroundOptions.update

let lastPrimitiveCount = 0
let primitiveCount = 0

let lastInfo = {
    verticesLength: 0,
    positionsLength: 0,
    colorsLength: 0,
    sizesLength: 0,
}

let vertices = []
let positions = []
let colors = []
let sizes = []


let velocities = []
const getTime = () => {
    return (new Date().getTime() - startTime) / 1000
}
const updateGPUBuffers = async () => {

    // These are never updated at the moment.
    // gl.bindBuffer(gl.ARRAY_BUFFER, vbo.get('vertices'))
    // const verticesLength = vertices.length
    // if (verticesLength >= lastInfo.verticesLength) {
    //     gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.DYNAMIC_DRAW)
    //     lastInfo.verticesLength = verticesLength
    // } else gl.bufferSubData(gl.ARRAY_BUFFER, 0, new Float32Array(vertices), 0, 0)

    gl.bindBuffer(gl.ARRAY_BUFFER, vbo.get('positions'))
    const positionsLength = positions.length
    if (positionsLength >= lastInfo.positionsLength) {
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.DYNAMIC_DRAW)
        lastInfo.positionsLength = positionsLength
    } else gl.bufferSubData(gl.ARRAY_BUFFER, 0, new Float32Array(positions), 0, 0)

    gl.bindBuffer(gl.ARRAY_BUFFER, vbo.get('colors'))
    const colorsLength = colors.length
    if (colorsLength >= lastInfo.colorsLength) {
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.DYNAMIC_DRAW)
        lastInfo.colorsLength = colorsLength
    } else gl.bufferSubData(gl.ARRAY_BUFFER, 0, new Float32Array(colors), 0, 0)

    gl.bindBuffer(gl.ARRAY_BUFFER, vbo.get('sizes'))
    const sizesLength = sizes.length
    if (sizesLength >= lastInfo.sizesLength) {
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(sizes), gl.DYNAMIC_DRAW)
        lastInfo.sizesLength = sizesLength
    } else gl.bufferSubData(gl.ARRAY_BUFFER, 0, new Float32Array(sizes), 0, 0)
}

const normalize = rgba => {
    return {
        r: rgba.r / 255,
        g: rgba.g / 255,
        b: rgba.b / 255,
        a: rgba.a || rgba.a / 255,
    }
}

function updateVertices() {
    numVerticesPerCircle = Math.floor(Math.abs(Math.sin(getTime())*12)+3)
    // Add vertices
    vertices = []
    for (let i = 0; i < numVerticesPerCircle; ++i) {
        const cont = i * Math.PI * 2 / numVerticesPerCircle
        vertices.push(Math.cos(cont), Math.sin(cont))
    }
}

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

    textColor = normalize(window.color.text)
    textColor.a = 0.2

    backColor = normalize(window.color.background)
    backColor.a = 1.0
}

async function draw() {
    updateValues()

    let pi = 0
    let ci = 0
    for (let i = 0; i < primitiveCount; ++i) {
        const p = updateFunc({
            pos: {x: positions[pi], y: positions[pi+1]},
            vel: {x: velocities[pi], y: velocities[pi+1]},
            size: sizes[i],
            color: {r: colors[ci], g: colors[ci+1], b: colors[ci+2], a: colors[ci+3]}
        })

        positions[pi] = p.pos.x
        positions[pi+1] = p.pos.y

        velocities[pi] = p.vel.x
        velocities[pi+1] = p.vel.y

        sizes[i] = p.size

        colors[ci+0] = p.color.r
        colors[ci+1] = p.color.g
        colors[ci+2] = p.color.b
        colors[ci+3] = p.color.a
        
        pi += 2
        ci += 4
    }


    gl.clearColor(0,0,0, 0.0)
    gl.clear(gl.COLOR_BUFFER_BIT)

    // Setup viewport, orthographic projection matrix
    gl.viewport(0, 0, canvasWidth, canvasHeight)

    gl.useProgram(program)
    gl.bindVertexArray(vao)
    gl.uniform2f(gAttribLocationViewportSize, canvasWidth, canvasHeight)

    const type = gl.TRIANGLE_FAN
    const first = 0
    const count = numVerticesPerCircle
    const primitive_count = primitiveCount

    await updateGPUBuffers()
    gl.drawArraysInstanced(type, first, count, primitive_count)

    window.requestAnimationFrame(await draw)

    lastPrimitiveCount = primitiveCount
}

onMount(async () => {

    gl = canvas.getContext("webgl2")

    if (!gl)  {
        console.log("no webgl2 context found. stopping.")
        return 
    }

    gl.enable(gl.BLEND)
    gl.blendEquation(gl.FUNC_ADD)
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)

    program = gl.createProgram()
    let vs = gl.createShader(gl.VERTEX_SHADER)
    let fs = gl.createShader(gl.FRAGMENT_SHADER)

    let shaderPreamble = `#version 300 es
    precision highp float;
    `

    let vs_src = shaderPreamble + `
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

    let fs_src = shaderPreamble + `
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

    let pi = 0
    let ci = 0
    primitiveCount = desiredPrimitiveCount
    positions.length = 2 * primitiveCount
    velocities.length = 2 * primitiveCount
    sizes.length = primitiveCount
    colors.length = 4*primitiveCount
    for (let i = 0; i < primitiveCount; ++i) {
       const p = initFunc({
            pos: {x: positions[pi], y: positions[pi+1]},
            vel: {x: velocities[pi], y: velocities[pi+1]},
            size: sizes[i],
            color: {r: colors[ci], g: colors[ci+1], b: colors[ci+2], a: colors[ci+3]}
        })

        positions[pi] = p.pos.x
        positions[pi+1] = p.pos.y

        velocities[pi] = p.vel.x
        velocities[pi+1] = p.vel.y

        sizes[i] = p.size

        colors[ci+0] = p.color.r
        colors[ci+1] = p.color.g
        colors[ci+2] = p.color.b
        colors[ci+3] = p.color.a
        
        pi += 2
        ci += 4
    }


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
        gl.DYNAMIC_DRAW
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

    await draw()
})

</script>
