<style lang="sass">

#editorToggle
    background: none
    position: absolute
    top: 50px
    left: 10px

canvas
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    z-index: -999
</style>

<svelte:head>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.32.0/codemirror.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.32.0/codemirror.min.css" />
</svelte:head>

<template lang="pug">

canvas(bind:this='{canvas}')

</template>

<script>
let code
import { onMount } from 'svelte'
import { v2, mat4 } from './utils/math'
import { randFloat, getTime } from './utils/utility'

let showEditor = false
let shaderError = false

let startTime = 0
let gl
let vao
let vbo = new Map()
let program

let canvas
let canvasWidth = 300
let canvasHeight = 300

let bindTo = 'moving-background'

let uniforms = new Map()
let iResolution
let iTime
let iTimeDelta
let iMouse
let mouse = {
    x: 0,
    y: 0,
    z: 0,
    w: 0
}


function compileShaders(fs) {
    program = gl.createProgram()
    let vs = gl.createShader(gl.VERTEX_SHADER)
    let fs_shader = gl.createShader(gl.FRAGMENT_SHADER)

    let uniforms = new Map()

    let shaderPreamble = `#version 300 es
    precision mediump float;
    uniform vec3      iResolution;           // viewport resolution (in pixels)
    uniform float     iTime;                 // shader playback time (in seconds)
    uniform float     iTimeDelta;            // render time (in seconds)
    uniform vec4      iMouse;                // mouse pixel coords. xy: current (if MLB down), zw: click
    out vec4      fragColor;
    `

    let vs_src = `#version 300 es
    precision mediump float;

    const vec2 vertices[6] = vec2[6](
             vec2(1.0,  1.0),
            vec2(-1.0,  1.0),
            vec2(-1.0, -1.0),
            vec2(-1.0, -1.0),
             vec2(1.0, -1.0),
             vec2(1.0,  1.0)
    );
    void main() {
        gl_Position = vec4(vertices[gl_VertexID], 0.0, 1.0);
    }
    `

    let fs_src = shaderPreamble + fs

    gl.shaderSource(vs, vs_src)
    gl.shaderSource(fs_shader, fs_src)

    gl.compileShader(vs)
    if (!gl.getShaderParameter(vs, gl.COMPILE_STATUS)) {
        console.error(
            'ERROR compiling vertex shader!',
            gl.getShaderInfoLog(vs)
        )
        return
    }

    shaderError = false
    gl.compileShader(fs_shader)
    if (!gl.getShaderParameter(fs_shader, gl.COMPILE_STATUS)) {
        shaderError = true
        console.error(
            'ERROR compiling fragment shader!',
            gl.getShaderInfoLog(fs_shader)
        )
        return
    }

    gl.attachShader(program, vs)
    gl.attachShader(program, fs_shader)

    gl.linkProgram(program)
    gl.validateProgram(program)

    uniforms.set('iResolution', gl.getUniformLocation(program, 'iResolution'))
    uniforms.set('iTime', gl.getUniformLocation(program, 'iTime'))
    uniforms.set('iTimeDelta', gl.getUniformLocation(program, 'iTimeDelta'))
    uniforms.set('iMouse', gl.getUniformLocation(program, 'iMouse'))

    gl.deleteShader(vs)
    gl.deleteShader(fs_shader)
}

onMount(async () => {
    // const ed = document.getElementById('editor')
    // ed.addEventListener('keydown', e => {
    //     var keyCode = e.keyCode || e.which;

    //     switch (keyCode) {
    //         case 9: {
    //             e.preventDefault();
    //             const s = ed.selectionStart
    //             ed.value = ed.value.substring(0,ed.selectionStart) + "    " + ed.value.substring(ed.selectionEnd)
    //             ed.selectionEnd = s+1
    //             break
    //         }
    //         case 56: { // ()
    //             e.preventDefault();
    //             const s = ed.selectionStart
    //             ed.value = ed.value.substring(0,ed.selectionStart) + "()" + ed.value.substring(ed.selectionEnd)
    //             ed.selectionEnd = s+1
    //             break
    //         }
    //         case 219: { // {}
    //             e.preventDefault();
    //             const s = ed.selectionStart
    //             ed.value = ed.value.substring(0,ed.selectionStart) + "{}" + ed.value.substring(ed.selectionEnd)
    //             ed.selectionEnd = s+1
    //             break
    //         }
    //         default:
    //             break;
    //     }
    // })

    gl = canvas.getContext("webgl2")

    if (!gl)  {
        console.log("no webgl2 context found. stopping.")
        return
    }

    gl.enable(gl.BLEND)
    gl.blendEquation(gl.FUNC_ADD)
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)


    code = sessionStorage.getItem('ShaderToy')
    if (!code) {
        code = `
void main() {

    vec2 uv = gl_FragCoord.xy;

    // Circle
    vec2 center = iResolution.xy * 0.5;
    center.x += 100.0 * sin(iTime);
    float radius = iResolution.y / 24.0;
    vec3 color = vec3(0.38, 0.16, 0.89);

    float d = length(center - uv) - radius;
    float t = clamp(d, 0.0, 1.0);

    vec4 circle = vec4(color, 1.0 - t);
    fragColor = circle;
}`
    }
    compileShaders(code)

    var editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
		autoRefresh: true,
		firstLineNumber: 1,
		lineNumbers: true,
		smartIndent: true,
		lineWrapping: true,
		indentWithTabs: true,
		refresh: true,
		mode: 'glsl'
	})
    editor.setValue(code)

    startTime = getTime()

    await draw()
})

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


function handleMouse(e) {
    const dpi = window.devicePixelRatio || 1
    mouse.x = e.clientX * dpi
    mouse.y = (window.innerHeight - e.clientY) * dpi
}
let lastTime = 0
async function draw() {

    updateValues()

    iResolution = new v2(canvasWidth, canvasHeight)
    iTimeDelta = getTime() - lastTime
    iTime = getTime() - startTime
    iMouse = mouse

    lastTime = iTimeDelta

    gl.clearColor(0,0,0, 0.0)
    gl.clear(gl.COLOR_BUFFER_BIT)
    gl.viewport(0, 0, canvasWidth, canvasHeight)

    gl.useProgram(program)

    gl.uniform3f(gl.getUniformLocation(program, 'iResolution'), iResolution.x, iResolution.y, 0)           // viewport resolution (in pixels)
    gl.uniform1f(gl.getUniformLocation(program, 'iTime'), iTime)                 // shader playback time (in seconds)
    gl.uniform1f(gl.getUniformLocation(program, 'iTimeDelta'), iTimeDelta)            // render time (in seconds)
    gl.uniform4f(gl.getUniformLocation(program, 'iMouse'), iMouse.x, iMouse.y, iMouse.z, iMouse.w)                // mouse pixel coords. xy: current (if MLB down), zw: click

    gl.drawArrays(gl.TRIANGLES, 0, 6)
    window.requestAnimationFrame(await draw)
}
</script>

<button id="editorToggle" on:click={()=> showEditor = !showEditor}>
<i class="fas fa-umbrella-beach"></i></button>
<textarea id="editor" on:input={() => {
    compileShaders(code);
    sessionStorage.setItem('ShaderToy', code);
}} bind:value={code} style="display: {showEditor ? 'block' : 'none'}"></textarea>
<svelte:window
    on:mousemove={handleMouse}
    on:mousedown={() => {mouse.z = 1; mouse.w = 1; }}
    on:mouseup={() => {mouse.z = 0; mouse.w = 0; }}
    />
