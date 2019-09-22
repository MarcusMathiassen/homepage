<canvas bind:this={canvas}></canvas>
<svelte:window
    on:resize={handleResize}
    on:mousemove={handleMouse}
    on:mousedown={() => {mouse.z = 1; mouse.w = 1; }}
    on:mouseup={() => {mouse.z = 0; mouse.w = 0; }}
    />
<button id="editorToggle" on:click={()=> showEditor = !showEditor}>
    <i class="fas fa-umbrella-beach"></i>
</button>
<textarea id="editor" on:input={() => {
    recompileShaders(code);
    sessionStorage.setItem('ShaderToy', code);
}} bind:value={code} style="border: 1px solid {shaderError ? 'systemRed' : 'systemGreen'}; display: {showEditor ? 'block' : 'none'}"></textarea>

<style lang="sass">

textarea
    margin: 40px
    padding: 20px
    position: absolute
    color: var(--text)
    background: var(--background)
    outline: none
    z-index: 999

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

<script>

import { onMount } from 'svelte'
import { getTime } from './utils/utility'

let code

let showEditor = false
let shaderError = false

let startTime = 0
let gl

let program
let vs
let fs

let canvas
let canvasWidth = 300
let canvasHeight = 300

let iResolutionAttribLoc = 0
let iTimeAttribLoc = 1
let iTimeDeltaAttribLoc = 2
let iMouseAttribLoc = 3

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

const shaderPreamble = `#version 300 es
precision mediump float;
uniform vec3      iResolution;           // viewport resolution (in pixels)
uniform float     iTime;                 // shader playback time (in seconds)
uniform float     iTimeDelta;            // render time (in seconds)
uniform vec4      iMouse;                // mouse pixel coords. xy: current (if MLB down), zw: click
out vec4      fragColor;
`

const vs_src = `#version 300 es
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
function compileShaders(fs_code) {
    
    program = gl.createProgram()

    vs = gl.createShader(gl.VERTEX_SHADER)
    fs = gl.createShader(gl.FRAGMENT_SHADER)

    gl.shaderSource(vs, vs_src)
    gl.shaderSource(fs, shaderPreamble + fs_code)

    gl.compileShader(vs)
    if (!gl.getShaderParameter(vs, gl.COMPILE_STATUS)) {
        console.error(
            'ERROR compiling vertex shader!',
            gl.getShaderInfoLog(vs)
        )
        return
    }

    shaderError = false
    gl.compileShader(fs)
    if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
        shaderError = true
        console.error(
            'ERROR compiling fragment shader!',
            gl.getShaderInfoLog(fs)
        )
        return
    }

    gl.attachShader(program, vs)
    gl.attachShader(program, fs)

    gl.linkProgram(program)
    gl.validateProgram(program)

    iResolutionAttribLoc = gl.getUniformLocation(program, 'iResolution')
    iTimeAttribLoc = gl.getUniformLocation(program, 'iTime')
    iTimeDeltaAttribLoc = gl.getUniformLocation(program, 'iTimeDelta')
    iMouseAttribLoc = gl.getUniformLocation(program, 'iMouse')
}

function recompileShaders(fs_code) {
    
    gl.detachShader(program, fs)
    
    gl.shaderSource(fs, shaderPreamble + fs_code)
    shaderError = false
    gl.compileShader(fs)
    if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
        shaderError = true
        console.error(
            'ERROR compiling fragment shader!',
            gl.getShaderInfoLog(fs)
        )
        return
    }

    gl.attachShader(program, fs)

    gl.linkProgram(program)
    gl.validateProgram(program)

    iResolutionAttribLoc = gl.getUniformLocation(program, 'iResolution')
    iTimeAttribLoc = gl.getUniformLocation(program, 'iTime')
    iTimeDeltaAttribLoc = gl.getUniformLocation(program, 'iTimeDelta')
    iMouseAttribLoc = gl.getUniformLocation(program, 'iMouse')
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

    updateValues()
    gl.viewport(0, 0, canvasWidth, canvasHeight)

    code = sessionStorage.getItem('ShaderToy')
    if (!code) {
        code = `
#define S(a,t) smoothstep(a, a+0.001, t)
void main() {
    vec2 uv = (gl_FragCoord.xy-iResolution.xy*0.5) / iResolution.y;
    
  vec3 col = vec3(0);
  uv.x *= 0.65;
  uv.x /=  max(abs(sin(iTime*5.0))*1.0,0.9);
  uv.y -= sqrt(abs(uv.x))*0.4;         
  uv.y += sin(iTime*1.0)*0.02;      
   float d = length(uv);
   col += S(.23, d);
   vec3 red = vec3(1,0,0);
   col += red;
   fragColor = vec4(col, 1);
}`
    }
    compileShaders(code)

    startTime = getTime()

    gl.useProgram(program)

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

function handleResize(e) {
    updateValues()
    gl.viewport(0, 0, canvasWidth, canvasHeight)
}
function handleMouse(e) {
    const dpi = window.devicePixelRatio || 1
    mouse.x = e.clientX * dpi
    mouse.y = (window.innerHeight - e.clientY) * dpi
}

let lastTime = 0
async function draw() {

    iResolution = {x: canvasWidth, y: canvasHeight}
    iTimeDelta = getTime() - lastTime
    iTime = getTime() - startTime
    iMouse = mouse

    lastTime = iTimeDelta

    gl.uniform3f(iResolutionAttribLoc, iResolution.x, iResolution.y, 0)
    gl.uniform1f(iTimeAttribLoc, iTime)
    gl.uniform1f(iTimeDeltaAttribLoc, iTimeDelta)
    gl.uniform4f(iMouseAttribLoc, iMouse.x, iMouse.y, iMouse.z, iMouse.w)

    gl.drawArrays(gl.TRIANGLES, 0, 6)
    window.requestAnimationFrame(await draw)
}
</script>







void main() {
    vec2 uv = (gl_FragCoord.xy-iResolution.xy*0.5) / iResolution.y;
    
    vec3 col = vec3(0);

    float d = length(uv);
    col = smoothstep(.3, .28, d);

    fragColor = vec4(col, 1);
}




