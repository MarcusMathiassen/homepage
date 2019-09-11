<template lang="pug">
h1 2D Collisions
#p2d
    .comment.info
        p.
            Any performance issue at this point is actually from the drawing of the particles.
            It doesnt cache the vertices, so it calculates them each frame via an immidiate mode api.
p
    | This is a test paragraf.
    b I am bold
.comment.info
    p.
        This is a info note.
        They can be recognized by their
        gray label.
    p.
        Not really sure what i will use them for, but
        i needed something else that just advice.
.comment.advice
    p.
        This is an advice note.
        They can be recognized by their
        green label.
p.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Porttitor eget dolor morbi non arcu risus. Egestas integer eget aliquet nibh praesent tristique magna sit.
    Sollicitudin nibh sit amet commodo nulla. Lobortis feugiat vivamus at augue eget arcu dictum. Pellentesque pulvinar
    pellentesque habitant morbi tristique senectus et netus. Nunc sed id semper risus in hendrerit gravida. Pellentesque
    massa placerat duis ultricies. Massa tincidunt nunc pulvinar sapien et. Mauris cursus mattis molestie a iaculis at erat
.comment.warning
    p.
        This is a warning note.
        These will be used to put emphasis on dangerous or unsafe things.
        They can be recognized by their
        orange label.

p.
    pellentesque. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit. Quis commodo odio aenean sed
    adipiscing diam donec. Adipiscing at in tellus integer feugiat scelerisque varius morbi enim. Bibendum at varius vel
    pharetra vel turpis. Cras sed felis eget velit aliquet. Quis hendrerit dolor magna eget est. Elit ut aliquam purus sit
    amet luctus venenatis. Sem viverra aliquet eget sit amet tellus cras adipiscing. Metus aliquam eleifend mi in nulla
    posuere sollicitudin. Egestas sed sed risus pretium quam.
.comment.advice
    p.
        Any performance issue at this point is actually from the drawing of the particles.
        It doesnt cache the vertices, so it calculates them each frame via an immidiate mode api.
        It doesnt cache the vertices, so it calculates them each frame via an immidiate mode api.
p.

    Vel risus commodo viverra maecenas accumsan. Quam pellentesque nec nam aliquam. Porttitor rhoncus dolor purus non enim
    praesent. Ac odio tempor orci dapibus ultrices in iaculis. Sit amet cursus sit amet dictum sit amet. Felis imperdiet
    proin fermentum leo. Adipiscing at in tellus integer. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus.
    Sed libero enim sed faucibus turpis in eu mi bibendum. Rhoncus urna neque viverra justo. Ultrices vitae auctor eu augue.
    Tristique nulla aliquet enim tortor. Nunc non blandit massa enim nec dui nunc. Laoreet sit amet cursus sit amet dictum.
    Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus.

</template>

<script>
    import { onMount } from 'svelte';

    import jq from './utils/query'

    import Particle from './utils/particle'
    import { v2, v4, mat4 } from './utils/math'
    import { getTime, Rect, getMinAndMaxPosition, addButton } from './utils/utility'
    import Quadtree from './utils/quadtree'

    onMount(() => {
        const id = "p2d"

        let vertices = []

        let viewportSize = 0

        let gAttribLocationProjMtx

        let parent
        let gl

        let vao
        let vbo
        let program

        let positionAttribLocation = 0
        let colorAttribLocation = 1

        let focused = false

        let comparisons = 0
        let hits = 0

        let devicePixelRatio

        let tree = []
        let backColor = { r: 255, g: 255, b: 255 }
        let frontColor = { r: 255, g: 0, b: 255 }
        let canvasWidth = 300
        let canvasHeight = 300
        let canvas
        let ui

        let enableCollision = true
        let showNodes = false
        let useQuadtree = true
        let useOptimizedBounds = true
        let showNeighbours = true
        let paused = false
        let showInfopanel = false
        let enableGravity = false

        let quadtreeBounds
        let allBounds = []

        let lastFps = 60
        let lastTime = 0

        let mouse = {
            x: 0,
            y: 0,
        }

        let particles = []
        let particleColors = []
        let particleSize = 8
        let particleColor = { r: 0, g: 0, b: 0, a: 1 }

        let boundsHighlightColor = { r: 0, g: 1, b: 0, a: 1 }
        let highlightColor = { r: 1, g: 1, b: 0, a: 1 }

        let mousedown = false

        const el = jq('<canvas>')
        canvas = el
        el.id = `${id}-canvas`
        el.textContent = 'webgl canvas placeholder'

        parent = jq(`#${id}`)
        parent.appendChild(el)

        canvas.addEventListener('mouseenter', () => (focused = !focused))
        canvas.addEventListener('mouseleave', () => (focused = !focused))

        canvas.addEventListener('mousemove', (ev) => {
            updateMousePos(ev)
            if (mousedown) spawnParticle()
        })

        canvas.addEventListener('mousedown', () => mousedown = true)
        canvas.addEventListener('mouseup', () => mousedown = false)


        const div = jq('<div>')
        div.id = `${parent.id}-settings`
        parent.append(div)

        // setInterval(updateUI, 1000)

        // addUI()

        addButton({
            label: 'clear',
            className: 'btn small',
            callback: erase,
            parent: div.id,
        })

        addButton({
            label: 'show neighbours',
            className: 'btn small',
            callback: () => {
                showNeighbours = !showNeighbours
            },
            parent: div.id,
        })

        addButton({
            label: 'quadtree',
            className: 'btn small',
            callback: () => {
                useQuadtree ^= 1
            },
            parent: div.id,
        })
        addButton({
            label: 'optimized quadtree bounds',
            className: 'btn small',
            callback: () => {
                useOptimizedBounds ^= 1
            },
            parent: div.id,
        })
        addButton({
            label: 'show quadtree nodes',
            className: 'btn small',
            callback: () => {
                showNodes ^= 1
            },
            parent: div.id,
        })
        addButton({
            label: 'collisions',
            className: 'btn small',
            callback: () => {
                enableCollision ^= 1
            },
            parent: div.id,
        })
        addButton({
            label: 'gravity',
            className: 'btn small',
            callback: () => {
                enableGravity ^= 1
            },
            parent: div.id,
        })
        addButton({
            label: 'info',
            className: 'btn small',
            callback: () => {
                showInfopanel ^= 1
            },
            parent: div.id,
        })
        addButton({
            label: 'pause',
            className: 'btn small',
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

        const resolveCollisions = particles => {
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

        const resolveCollisionsQuadtree = (particles, tree) => {
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

        const extractRGB = str => {
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

        const drawTriangle = (positions, color, size) => {
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

        const drawRectRange = (min, max, color) => {
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
        const drawRect = (position, color, size) => {
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

        const drawLine = (p1, p2, color, size) => {
            if (size < 0.0) size = 0.001

            // Get the distance between our two points
            let d = v2.distance(p1, p2) * 0.5

            let dx = p2.x - p1.x
            let dy = p2.y - p1.y

            // Get the angle between our two points (radians)
            let theta = Math.atan2(dy, dx)

            let s = size

            let center = v2.add(p1, p2).scale(0.5)

            // Draw center debug rects
            let bot = { x: center.x - d + s, y: center.y }
            let top = { x: center.x + d - s, y: center.y }

            drawCircle(p1, color, size, 36)
            drawCircle(p2, color, size, 36)

            // Rotate
            const min = v2.subs(bot, s)
            const max = v2.adds(top, s)

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
                    case 1: {
                        k += 1
                        const cont = angle + ((i - 1) * Math.PI) / n_vertices
                        last_vert = new v2(
                            center.x + radius * Math.cos(cont),
                            center.y + radius * Math.sin(cont)
                        )
                        verts.push(last_vert.x)
                        verts.push(last_vert.y)
                        break
                    }
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

        const drawCircle = (center, color, size, num_vertices) => {
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

        function addVertices (verts) {
            // Update our vertices
            vertices.push(...verts)
        }

        function updateValues () {
            canvasWidth = parent.offsetWidth
            canvasHeight = 500

            var desiredCSSWidth = canvasWidth
            var desiredCSSHeight = canvasHeight
            devicePixelRatio = window.devicePixelRatio || 1

            canvas.width = desiredCSSWidth * devicePixelRatio
            canvas.height = desiredCSSHeight * devicePixelRatio

            canvas.style.width = desiredCSSWidth + 'px'
            canvas.style.height = desiredCSSHeight + 'px'

            canvasWidth *= devicePixelRatio
            canvasHeight *= devicePixelRatio

            frontColor = normalize(window.color.text)
            frontColor.a = 1

            backColor = normalize(window.color.background)
            backColor.a = 1

            boundsHighlightColor = {r: 0, g: 1, b:0, a: 1}
        }

        function erase() {
            particles.length = 0
            particleColors.length = 0
        }

        function drawUI () {
            // Show the cursor as a hollow circle with the current selected size.

            // But only if it is inside the canvas
            if (focused)
                drawHollowCircle(
                    mouse,
                    frontColor,
                    getParticleSize(),
                    0.5 * devicePixelRatio,
                    36
                )
        }
        function baseLineComparisons() {
            const n = particles.length
            return (n * (n - 1)) / 2
        }
        function comparisonsDelta() {
            return baseLineComparisons() / comparisons
        }
        function addUI (){
            ui = jq('<ul>')
            ui.id = `${parent.id}-info`
            ui.className = 'demo-info-list'
            parent.insertBefore(ui, canvas)
        }

        function updateUI (show = true, fontSize = 14){
            ui.innerHTML = ''
            ui.style = `font-size: ${fontSize}px; display: ${
                show ? 'inline' : 'none'
            };`
            const labels = [
                `FPS: ${lastFps}`,
                `Particles: ${particles.length}`,
                `Comparisons: ${comparisons}(${comparisonsDelta().toFixed(0)}x)`,
            ]

            for (const label of labels) {
                const l = jq('<li>')
                l.textContent = label
                l.className = 'demo-info-list-element'
                ui.appendChild(l)
            }
        }

        function getRelativeMousePosition (event, target) {
            target = target || event.target
            const rect = target.getBoundingClientRect()

            return {
                x: event.clientX - rect.left,
                y: event.clientY - rect.top,
            }
        }

        function updateMousePos (event, target) {
            target = target || event.target
            let pos = getRelativeMousePosition(event, target)

            pos.x *= devicePixelRatio
            pos.y *= devicePixelRatio

            mouse = pos
        }

        function getMousePosInViewspace (){
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
            const vertexCount = 36
            for (let i = 0; i < particleCount; ++i) {
                const particle = particles[i]
                const position = particle.position
                const radius = particle.radius
                const color = particleColors[i]
                drawCircle(position, color, radius, vertexCount)
                drawHollowCircle(
                    position,
                    backColor,
                    radius,
                    0.3 * devicePixelRatio,
                    vertexCount
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
            let particle = new Particle(mouse.x, mouse.y, size)
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

        function getParticleSize() {
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
                            2 * devicePixelRatio
                        )
                    }
                }

                // Only draw the neighbours if the app
                // is in focus.
                // Otherwise when the user leaves the region
                // the mouse will be stuck in the last place and
                // distract the user.
                if (focused && showNeighbours) {

                    let neighbours = []
                    quadtree.getNeighbourNodes(neighbours, {
                        position: mouse,
                        radius: getParticleSize(),
                    })

                    // Draw all neighbours in a highlight color.
                    neighbours.forEach(node => {
                        const bound = node.bounds
                        const x = bound.min.x
                        const y = bound.min.y
                        const width = bound.max.x - bound.min.x - 1
                        const height = bound.max.y - bound.min.y - 1
                        drawHollowRectRange(
                            new v2(x, y),
                            new v2(x + width, y + height),
                            boundsHighlightColor,
                            2 * devicePixelRatio
                        )
                        // Draw the particles
                        node.indices.forEach(index => {
                            particleColors[index] = boundsHighlightColor
                        })
                    })
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

            vertices = []
            updateFPS()
        }
        function updateFPS() {
            lastFps = 1 / (getTime() - lastTime)
            lastTime = getTime()
            lastFps = lastFps.toFixed(0)
        }

        animate()
    });
</script>
