<canvas
    bind:this={canvas}
></canvas>

<style>
canvas {
    /*margin: 0 auto;*/
    /*margin-bottom: 20px;*/
    /*width: 250px;*/
    position: absolute;
    /*height: 250px;*/
    z-index: 1;
}
</style>
<script>
    import avatar from '../assets/avatar.jpg'

    import vert from './shaders/blob-avatar.vert'
    import frag from './shaders/blob-avatar.frag'

    import { onMount } from 'svelte'
    import { v2, mat4 } from './utils/math'
    import { randFloat, getTime } from './utils/utility'

    let focused = true
    let mouse = {
        x: 0.0,
        y: 0.0,
        z: 0.0,
        w: 0.0
    }

    let time

    let uniformLoc = {
        viewport_size: 0,
        sam: 0,
        time: 0,
        mouse: 0,
    }

    let texture
    let startTime = 0
    let textColors
    let backColor
    let devicePixelRatio
    let vao
    let gl
    let program
    let gAttribLocationSam = 0
    let gAttribLocationViewportSize = 4
    let canvas
    let canvasWidth = 250
    let canvasHeight = 250

    //
// Initialize a texture and load an image.
// When the image finished loading copy it into the texture.
//
// function loadTexture(gl, url) {
//   gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
//   const texture = gl.createTexture();
//   gl.bindTexture(gl.TEXTURE_2D, texture);

//   // Because images have to be download over the internet
//   // they might take a moment until they are ready.
//   // Until then put a single pixel in the texture so we can
//   // use it immediately. When the image has finished downloading
//   // we'll update the texture with the contents of the image.
//   const level = 0;
//   const internalFormat = gl.RGBA;
//   const width = 1;
//   const height = 1;
//   const border = 0;
//   const srcFormat = gl.RGBA;
//   const srcType = gl.UNSIGNED_BYTE;
//   const pixel = new Uint8Array([0, 0, 255, 255]);  // opaque blue
//   gl.texImage2D(gl.TEXTURE_2D, level, internalFormat,
//                 width, height, border, srcFormat, srcType,
//                 pixel);

//   const image = new Image();
//   image.onload = function() {
//     gl.bindTexture(gl.TEXTURE_2D, texture);
//     gl.texImage2D(gl.TEXTURE_2D, level, internalFormat,
//                   srcFormat, srcType, image);

//     // WebGL1 has different requirements for power of 2 images
//     // vs non power of 2 images so check if the image is a
//     // power of 2 in both dimensions.
//     if (isPowerOf2(image.width) && isPowerOf2(image.height)) {
//        // Yes, it's a power of 2. Generate mips.
//        gl.generateMipmap(gl.TEXTURE_2D);
//     } else {
//        // No, it's not a power of 2. Turn off mips and set
//        // wrapping to clamp to edge
//        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
//        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
//        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
//     }
//   };
//   image.src = url;

//   return texture;
// }

// function isPowerOf2(value) {
//   return (value & (value - 1)) == 0;
// }
    const normalize = rgba => {
        return {
            r: rgba.r / 255,
            g: rgba.g / 255,
            b: rgba.b / 255,
            a: rgba.a || rgba.a / 255,
        }
    }
    function updateValues () {
        // canvasWidth = window.innerWidth
        // canvasHeight = window.innerHeight
        // var desiredCSSWidth = canvasWidth
        // var desiredCSSHeight = canvasHeight
        devicePixelRatio = window.devicePixelRatio || 1
        // canvas.width = desiredCSSWidth * devicePixelRatio
        // canvas.height = desiredCSSHeight * devicePixelRatio
        // canvas.style.width = desiredCSSWidth + 'px'
        // canvas.style.height = desiredCSSHeight + 'px'
        // canvasWidth *= devicePixelRatio
        // canvasHeight *= devicePixelRatio
        // textColor = normalize(window.color.text)
        // textColor.a = 0.2
        // backColor = normalize(window.color.background)
        // backColor.a = 1.0
        // GPUBuffersNeedingUpdate.colors = true
    }

    // const getRelativeMousePosition = (event, target) => {
    //     target = target || event.target
    //     const rect = target.getBoundingClientRect()

    //     return {
    //         x: event.clientX - rect.left,
    //         y: event.clientY - rect.top,
    //     }
    // }

    // const updateMousePos = (event, target) => {
    //     target = target || event.target
    //     let pos = getRelativeMousePosition(event, target)

    //     pos.x *= devicePixelRatio
    //     pos.y *= devicePixelRatio

    //     mouse = pos
    // }
    // onMount(async () => {

    //     canvas.addEventListener('mousemove', updateMousePos)
    //     canvas.addEventListener('mouseenter', () => (focused = !focused))
    //     canvas.addEventListener('mouseleave', () => (focused = !focused))

    //     gl = canvas.getContext("webgl2")
    //     if (!gl)  {
    //         console.error("no webgl2 context found. stopping.")
    //         return 
    //     }
    //     gl.enable(gl.BLEND)
    //     gl.blendEquation(gl.FUNC_ADD)
    //     gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)
    //     program = gl.createProgram()
    //     let vs = gl.createShader(gl.VERTEX_SHADER)
    //     let fs = gl.createShader(gl.FRAGMENT_SHADER)
    //     gl.shaderSource(vs, vert)
    //     gl.shaderSource(fs, frag)
    //     gl.compileShader(vs)
    //     if (!gl.getShaderParameter(vs, gl.COMPILE_STATUS)) {
    //         console.error(
    //             'ERROR compiling vertex shader!',
    //             gl.getShaderInfoLog(vs)
    //         )
    //         return
    //     }
    //     gl.compileShader(fs)
    //     if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
    //         console.error(
    //             'ERROR compiling fragment shader!',
    //             gl.getShaderInfoLog(fs)
    //         )
    //         return
    //     }
    //     gl.attachShader(program, vs)
    //     gl.attachShader(program, fs)
    //     gl.linkProgram(program)
    //     gl.validateProgram(program)
        
    //     uniformLoc.viewport_size = gl.getUniformLocation(program, 'viewport_size')
    //     uniformLoc.sam = gl.getUniformLocation(program, 'sam'),
    //     uniformLoc.time = gl.getUniformLocation(program, 'time')
    //     uniformLoc.mouse = gl.getUniformLocation(program, 'mouse')

    //     gl.deleteShader(vs)
    //     gl.deleteShader(fs)
    //     vao = gl.createVertexArray()
    //     gl.bindVertexArray(vao)

    //     texture = loadTexture(gl, avatar);

    //     let frame;

    //     (function loop() {
    //         frame = requestAnimationFrame(loop);
    //         updateValues()

    //         time = getTime()

    //         // gl.clearColor(backColor.r,backColor.g,backColor.b, backColor.a)
    //         gl.clear(gl.COLOR_BUFFER_BIT)

    //         // Setup viewport, orthographic projection matrix
    //         gl.viewport(0, 0, canvasWidth, canvasHeight)
    //         gl.useProgram(program)
    //         gl.bindVertexArray(vao)
    //         gl.uniform2f(gAttribLocationViewportSize, canvasWidth, canvasHeight)

    //         gl.uniform1f(uniformLoc.time, time)
    //         gl.uniform4f(uniformLoc.mouse, mouse.x, mouse.y, mouse.z, mouse.w)

    //         // Tell WebGL we want to affect texture unit 0
    //         gl.activeTexture(gl.TEXTURE0);

    //         // Bind the texture to texture unit 0
    //         gl.bindTexture(gl.TEXTURE_2D, texture);

    //           // Tell the shader we bound the texture to texture unit 0
    //         gl.uniform1i(gAttribLocationSam, 0)

    //         gl.drawArrays(gl.TRIANGLES, 0, 3)
    //     }());
    //     return () => {
    //         cancelAnimationFrame(frame);
    //     };
    // })
</script>

