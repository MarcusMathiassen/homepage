<style lang="sass">
    canvas
        border-radius: 0.3em
</style>

<svelte:window on:keydown={handle_keydown} on:keyup={function(e){keys[e.keyCode] = 0}}/>
<template lang="pug">
    div(style='text-align: center')
        canvas(bind:this='{canvas}' on:click='{lockCursor}')
</template>

<script>
    // import avatar from '/static/great-success.png'
    // import avatarBurned from '../assets/avatar_burned2.png'

    import vert from './shaders/plao.vert'
    import frag from './shaders/plao.frag'
    import pathtracer_frag from './shaders/plao-pathtracer.frag'
    import quad_frag from './shaders/quad.frag'
    import quad_vert from './shaders/quad.vert'

    import { onMount } from 'svelte'
    import { v2, v3, mat3, mat4 } from './utils/math'
    import Camera from './utils/camera'
    import { randFloat, getTime } from './utils/utility'


    let camera = new Camera()

    let frameTime = 0.0

    export let resolutionScale = 1.0
    export let size = {x: 640, y: 480}

    let focused = true
    let startTime = 0
    let mouse = {
        x: 0.0,
        y: 0.0,
        z: 0.0,
        w: 0.0
    }

    let textColors
    let backColor
    let devicePixelRatio
    let gl
    let canvas
    let canvasWidth = size.x
    let canvasHeight = size.y
    let editMode = 1
    let deltaTime = 0.016
    
    let fbo
    let texture

    let frameIndex = 0

    let cursorLocked = false
    let keys = []

    const renderOptions = {
        lambert: "lambert",
        pathtraced: "pathtraced",
    }

    let renderOption = renderOptions.lambert
    function updateValues () {
        var desiredCSSWidth = size.x
        var desiredCSSHeight = size.y
        devicePixelRatio = canvas.devicePixelRatio || 1
        canvas.width = desiredCSSWidth * devicePixelRatio *resolutionScale
        canvas.height = desiredCSSHeight * devicePixelRatio *resolutionScale
        canvas.style.width = desiredCSSWidth + 'px'
        canvas.style.height = desiredCSSHeight + 'px'
        // textColor = normalize(window.color.text)
        // textColor.a = 0.2
        // backColor = normalize(window.color.background)

        gl.viewport(0, 0, canvas.width, canvas.height)

        // @hardcoded
        if (document.documentElement.getAttribute('theme') === 'light') {
            backColor = normalize({r:236,g:236,b:236})
        } else {
            backColor = normalize({r:26, g:26, b:26})
        }
        // GPUBuffersNeedingUpdate.colors = true
    }
    const resizeTextures = () => {
        updateValues()
        texture = gl.createTexture()
        gl.bindTexture(gl.TEXTURE_2D, texture)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, canvas.width, canvas.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null)

        fbo = gl.createFramebuffer()
        gl.bindFramebuffer(gl.FRAMEBUFFER, fbo)
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0)
    }

    let mounted = false
    $: if (mounted) resolutionScale, resizeTextures()


    const lockCursor = () => {
            canvas.requestPointerLock = canvas.requestPointerLock ||
			     canvas.mozRequestPointerLock ||
			     canvas.webkitRequestPointerLock;
            // Ask the browser to lock the pointer
            canvas.requestPointerLock();
            cursorLocked = true
    }

    const handle_keydown = (e) => {
        keys[e.keyCode] = 1
        if (e.key == "c") {
            frameIndex = 0
            renderOption = renderOption == "lambert" ? renderOptions.pathtraced : renderOptions.lambert
        }
        if (e.key == "f") {
            canvas.requestFullscreen()
        }

        if (e.key == "i") {
            editMode ^= 1
            if (!editMode) {
                lockCursor()
            } else {
                    // Ask the browser to release the pointer
                document.exitPointerLock = document.exitPointerLock ||
                            document.mozExitPointerLock ||
                            document.webkitExitPointerLock;
                document.exitPointerLock();
                cursorLocked = false
            }
        }
    }

    function isPowerOf2(value) {
      return (value & (value - 1)) == 0;
    }
    const normalize = rgba => {
        return {
            r: rgba.r / 255.0,
            g: rgba.g / 255.0,
            b: rgba.b / 255.0
        }
    }

    const getRelativeMousePosition = (event, target) => {
        target = target || event.target
        const rect = target.getBoundingClientRect()

        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
        }
    }

    let last_x = 512.0/2.0
    let last_y = 512.0/2.0
    const updateMousePos = (event, target) => {
        target = target || event.target
        let pos = getRelativeMousePosition(event, target)

        var movementX = event.movementX || event.mozMovementX ||  0;
        var movementY = event.movementY || event.mozMovementY ||  0;

        pos.x *= devicePixelRatio
        pos.y *= devicePixelRatio

        mouse.x = pos.x
        mouse.y = pos.y

        const xoffset = pos.x - last_x;
        const yoffset = pos.y - last_y; // reversed since y-coordinates go from bottom to top

        last_x = pos.x;
        last_y = pos.y;

        if (cursorLocked)
            camera.process_mouse_movement(movementX*0.5, movementY*0.5);
    }
    function lockChangeAlert() {
    if(document.pointerLockElement === canvas ||
    document.mozPointerLockElement === canvas) {
        canvas.addEventListener("mousemove", updateMousePos, false);
        cursorLocked = true
    } else {
        canvas.removeEventListener("mousemove", updateMousePos, false);
        cursorLocked = false
    }
    }

    onMount(async() => {

        mounted = true

        document.addEventListener('pointerlockchange', lockChangeAlert, false);
        document.addEventListener('mousemove', updateMousePos)
        canvas.addEventListener('mouseenter', () => (focused = !focused))
        canvas.addEventListener('mouseleave', () => (focused = !focused))
        canvas.addEventListener('mousedown', () => {
            mouse.w = 1.0
        })

        gl = canvas.getContext("webgl2")
        if (!gl)  {
            console.error("no webgl2 context found. stopping.")
            return
        }
        // Fullscreen Quad..
        ////
        const quad_program = gl.createProgram()
        let vs = gl.createShader(gl.VERTEX_SHADER)
        let fs = gl.createShader(gl.FRAGMENT_SHADER)
        gl.shaderSource(vs, quad_vert)
        gl.shaderSource(fs, quad_frag)
        gl.compileShader(vs)
        if (!gl.getShaderParameter(vs, gl.COMPILE_STATUS)) {
            console.error('ERROR compiling vertex shader!', gl.getShaderInfoLog(vs))
            return
        }
        gl.compileShader(fs)
        if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
            console.error('ERROR compiling fragment shader!',gl.getShaderInfoLog(fs))
            return
        }
        gl.attachShader(quad_program, vs)
        gl.attachShader(quad_program, fs)
        gl.linkProgram(quad_program)
        gl.validateProgram(quad_program)
        gl.deleteShader(vs)
        gl.deleteShader(fs)

        const quad_uTex_loc = gl.getUniformLocation(quad_program, "uTex");
        const quad_uRes_loc = gl.getUniformLocation(quad_program, "uRes");
        const quad_uFrameIndex_loc = gl.getUniformLocation(quad_program, "uFrameIndex");
        
        ////
        const lambert_program = gl.createProgram()
        vs = gl.createShader(gl.VERTEX_SHADER)
        fs = gl.createShader(gl.FRAGMENT_SHADER)
        gl.shaderSource(vs, vert)
        gl.shaderSource(fs, frag)
        gl.compileShader(vs)
        if (!gl.getShaderParameter(vs, gl.COMPILE_STATUS)) {
            console.error('ERROR compiling vertex shader!', gl.getShaderInfoLog(vs))
            return
        }
        gl.compileShader(fs)
        if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
            console.error('ERROR compiling fragment shader!',gl.getShaderInfoLog(fs))
            return
        }
        gl.attachShader(lambert_program, vs)
        gl.attachShader(lambert_program, fs)
        gl.linkProgram(lambert_program)
        gl.validateProgram(lambert_program)
        gl.deleteShader(vs)
        gl.deleteShader(fs)

        const lambert_uRes_loc        = gl.getUniformLocation(lambert_program, "uRes")
        const lambert_uMouse_loc      = gl.getUniformLocation(lambert_program, "uMouse")
        const lambert_uBackColor_loc  = gl.getUniformLocation(lambert_program, "uBackColor")
        const lambert_uTime_loc       = gl.getUniformLocation(lambert_program, "uTime")
        const lambert_uPixelSize_loc  = gl.getUniformLocation(lambert_program, "uPixelSize")
        const lambert_uCamPos_loc     = gl.getUniformLocation(lambert_program, "uCamPos")
        const lambert_uCamMatrix_loc  = gl.getUniformLocation(lambert_program, "uCamMatrix")
        const lambert_uZoom_loc       = gl.getUniformLocation(lambert_program, "uZoom")
        const lambert_uTex_loc        = gl.getUniformLocation(lambert_program, "uTex")
        const lambert_uFrameIndex_loc = gl.getUniformLocation(lambert_program, "uFrameIndex")

        ////
        const pathtraced_program = gl.createProgram()
        vs = gl.createShader(gl.VERTEX_SHADER)
        fs = gl.createShader(gl.FRAGMENT_SHADER)
        gl.shaderSource(vs, vert)
        gl.shaderSource(fs, pathtracer_frag)
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
        gl.attachShader(pathtraced_program, vs)
        gl.attachShader(pathtraced_program, fs)
        gl.linkProgram(pathtraced_program)
        gl.validateProgram(pathtraced_program)
        gl.deleteShader(vs)
        gl.deleteShader(fs)


        const pathtraced_uRes_loc        = gl.getUniformLocation(pathtraced_program, "uRes")
        const pathtraced_uMouse_loc      = gl.getUniformLocation(pathtraced_program, "uMouse")
        const pathtraced_uBackColor_loc  = gl.getUniformLocation(pathtraced_program, "uBackColor")
        const pathtraced_uTime_loc       = gl.getUniformLocation(pathtraced_program, "uTime")
        const pathtraced_uPixelSize_loc  = gl.getUniformLocation(pathtraced_program, "uPixelSize")
        const pathtraced_uCamPos_loc     = gl.getUniformLocation(pathtraced_program, "uCamPos")
        const pathtraced_uCamMatrix_loc  = gl.getUniformLocation(pathtraced_program, "uCamMatrix")
        const pathtraced_uZoom_loc       = gl.getUniformLocation(pathtraced_program, "uZoom")
        const pathtraced_uTex_loc        = gl.getUniformLocation(pathtraced_program, "uTex")
        const pathtraced_uFrameIndex_loc = gl.getUniformLocation(pathtraced_program, "uFrameIndex")


        const vao = gl.createVertexArray()
        gl.bindVertexArray(vao)

        resizeTextures()

        console.log(gl.checkFramebufferStatus(fbo))
        console.log(gl.isFramebuffer(fbo))

        gl.bindFramebuffer(gl.FRAMEBUFFER, null)

        let frame;

        startTime = getTime()

        gl.clearColor(0.0, 0.0, 0.0, 0.0)
        gl.bindVertexArray(vao)

        const loop = () => {
            frame = requestAnimationFrame(loop);

            const frameStartTime = getTime()

            updateValues()

            let time = (getTime() - startTime) / 1000
            
            if (keys[65]) camera.process_keyboard(camera.states.MOVE_LEFT, deltaTime);
            if (keys[68]) camera.process_keyboard(camera.states.MOVE_RIGHT, deltaTime);
            if (keys[83]) camera.process_keyboard(camera.states.MOVE_BACKWARD, deltaTime);
            if (keys[87]) camera.process_keyboard(camera.states.MOVE_FORWARD, deltaTime);
            if (keys[69]) camera.process_keyboard(camera.states.MOVE_UP, deltaTime);
            if (keys[81]) camera.process_keyboard(camera.states.MOVE_DOWN, deltaTime);

            const ro = camera.position;
            const ta = v3.add(camera.position, camera.front);

            const cr = 0.0;
            const cw = v3.normalize(v3.sub(ta,ro));
            const cp = new v3(Math.sin(cr), Math.cos(cr), 0.0);
            const cu = v3.normalize( v3.cross(cw,cp));
            const cv = v3.cross(cu,cw);
            const matrix = mat3.fromValues(
                    cu.x, 
                    cu.y, 
                    cu.z, 
                    cv.x, 
                    cv.y, 
                    cv.z, 
                    cw.x,
                    cw.y,
                    cw.z
            )

            const zoom = 1.5
            const pixelSize = 1.0 / canvas.width

            switch (renderOption) {
                
                case renderOptions.lambert:
                
                    gl.useProgram(lambert_program)
                    
                    gl.uniform2f(  lambert_uRes_loc,         canvas.width, canvas.height)
                    gl.uniform4f(  lambert_uMouse_loc,       mouse.x, mouse.y, mouse.z, mouse.w)
                    gl.uniform3f(  lambert_uBackColor_loc,   backColor.r, backColor.g, backColor.b)
                    gl.uniform1f(  lambert_uTime_loc,        time)
                    gl.uniform1f(  lambert_uPixelSize_loc,   pixelSize)
                    gl.uniform3f(  lambert_uCamPos_loc,      ro.x, ro.y, ro.z)
                    gl.uniformMatrix3fv( lambert_uCamMatrix_loc,   false, matrix)
                    gl.uniform1f(  lambert_uZoom_loc,        zoom)
                    gl.uniform1i(  lambert_uTex_loc,         0)
                    gl.uniform1i(  lambert_uFrameIndex_loc,  frameIndex)
                    
                    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo)
                    gl.activeTexture(gl.TEXTURE0)
                    gl.bindTexture(gl.TEXTURE_2D, texture)
                    gl.drawArrays(gl.TRIANGLES, 0, 3)
                    
                    break;
                
                case renderOptions.pathtraced:

                    gl.useProgram(pathtraced_program)
                    
                    gl.uniform2f(  pathtraced_uRes_loc,         canvas.width, canvas.height)
                    gl.uniform4f(  pathtraced_uMouse_loc,       mouse.x, mouse.y, mouse.z, mouse.w)
                    gl.uniform3f(  pathtraced_uBackColor_loc,   backColor.r, backColor.g, backColor.b)
                    gl.uniform1f(  pathtraced_uTime_loc,        time)
                    gl.uniform1f(  pathtraced_uPixelSize_loc,   pixelSize)
                    gl.uniform3f(  pathtraced_uCamPos_loc,      ro.x, ro.y, ro.z)
                    gl.uniformMatrix3fv( pathtraced_uCamMatrix_loc,   false, matrix)
                    gl.uniform1f(  pathtraced_uZoom_loc,        zoom)
                    gl.uniform1i(  pathtraced_uTex_loc,         0)
                    gl.uniform1i(  pathtraced_uFrameIndex_loc,  frameIndex)
                    
                    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo)
                    
                    gl.activeTexture(gl.TEXTURE0)
                    gl.bindTexture(gl.TEXTURE_2D, texture)

                    gl.drawArrays(gl.TRIANGLES, 0, 3)
                    
                    break;
            }


            gl.useProgram(quad_program)

            gl.uniform1i(quad_uTex_loc, 0)
            gl.uniform1i(quad_uFrameIndex_loc, frameIndex)
            gl.uniform2f(quad_uRes_loc, canvas.width, canvas.height)
            
            gl.bindFramebuffer(gl.FRAMEBUFFER, null)
            gl.activeTexture(gl.TEXTURE0)
            gl.bindTexture(gl.TEXTURE_2D, texture)
            gl.drawArrays(gl.TRIANGLES, 0, 3)

            mouse.z = 0.0
            mouse.w = 0.0

            frameTime = (getTime() - frameStartTime)
            frameIndex++
        }
        loop()
        return () => cancelAnimationFrame(frame)
    })
</script>
