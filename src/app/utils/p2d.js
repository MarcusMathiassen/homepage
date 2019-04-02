import $ from './query'
import p5 from 'p5'
import { v2, v4 } from './math'
import Particle from './particle'
import { addProgressBar, Rect, getMinAndMaxPosition } from './utility'
import Quadtree from './quadtree'

let id = '111'

let comparisons = 0
let hits = 0

let tree = []
let backColor = { r: 255, g: 255, b: 255 }
let frontColor = { r: 255, g: 255, b: 255 }
let canvas

let enableCollision = true
let showNodes = false
let useQuadtree = true
let useOptimizedBounds = false
let paused = false
let showInfopanel = false
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
let particleColor = { r: 255, g: 255, b: 255 }

let boundsHighlightColor = { r: 0, g: 255, b: 0 }
let highlightColor = { r: 255, g: 255, b: 0 }

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

const updateValues = () => {
    canvas.width = $(`#${id}`).offsetWidth
    frontColor = window.color.textNormal
    backColor = window.color.backgroundContent
    boundsHighlightColor = window.color.textRicher
}

const addButton = (name, func) => {
    const element = $('<button>')
    element.textContent = name
    element.id = name
    element.className = 'btn'
    element.addEventListener('click', func)
    $(`#${id}-settings`).appendChild(element)
}

const baseLineComparisons = () => {
    const n = particles.length
    return (n * (n - 1)) / 2
}
const comparisonsDelta = () => {
    return baseLineComparisons() / comparisons
}
const sketch = p => {
    const getPixelRatio = () => {
        const backingStore =
            p.drawingContext.backingStorePixelRatio ||
            p.drawingContext.webkitBackingStorePixelRatio ||
            p.drawingContext.mozBackingStorePixelRatio ||
            p.drawingContext.msBackingStorePixelRatio ||
            p.drawingContext.oBackingStorePixelRatio ||
            p.drawingContext.backingStorePixelRatio ||
            1

        return (window.devicePixelRatio || 1) / backingStore
    }

    const drawLabel = (label, pos, size, func) => {
        p.push()
        p.fill(backColor.r, backColor.g, backColor.b)
        p.rect(
            pos.x * 0.8,
            pos.y - size * 0.8,
            p.textWidth(label) * 0.75,
            size * 1.5,
            5
        )
        p.fill(frontColor.r, frontColor.g, frontColor.b)
        p.stroke(backColor.r, backColor.g, backColor.b)
        p.strokeWeight(1)
        p.textSize(size)
        p.textAlign(p.LEFT, p.CENTER)
        p.text(label, pos.x, pos.y)
        p.pop()
    }
    const fpsCounter = () => {
        p.push()
        if (fc++ > 30) {
            fc = 0
            lastFps = p.frameRate()
        }

        let fps = lastFps

        const textSize = 12
        const textX = 30
        let textY = 30

        drawLabel('FPS: ' + fps.toFixed(0), { x: textX, y: textY }, textSize, 0)
        textY += textSize * 2.0
        drawLabel(
            'Particles: ' + particles.length,
            { x: textX, y: textY },
            textSize,
            0
        )
        textY += textSize * 2.0
        if (enableCollision)
            drawLabel(
                'Comparisons: ' +
                    comparisons +
                    '(' +
                    comparisonsDelta().toFixed(0) +
                    'x)',
                { x: textX, y: textY },
                textSize,
                0
            )
    }

    const drawUI = () => {
        // Show the cursor as a hollow circle with the current selected size.
        p.noFill()
        p.stroke(frontColor.r, frontColor.g, frontColor.b)
        p.strokeWeight(1)
        p.circle(mouse.x, mouse.y, particleSize)
        if (showInfopanel) fpsCounter()
    }

    p.windowResized = () => {
        p.resizeCanvas(canvas.width, canvas.height)
    }

    p.setup = () => {
        canvas = p.createCanvas(300, 300)
        console.log(`#${id}`, canvas)
        canvas.parent(id)
        p5.disableFriendlyErrors = true // disables FES
        p.noCursor()
        p.textSize(20)
        updateValues()
        p.resizeCanvas(canvas.width, canvas.height)
        canvas.touchMoved(() => {
            spawnParticle()
            return false
        })
        canvas.mouseReleased(spawnParticle)

        // We dont want the mouse to lock on to the last edge it touched.
        const el = $(`#${canvas.canvas.id}`)
        el.addEventListener('mouseleave', event => {
            mouse = { x: -999999, y: -999999 }
        })
        el.addEventListener('mousemove', event => {
            mouse = { x: event.offsetX, y: event.offsetY }
        })

        const div = $('<div>')
        div.id = `${id}-settings`
        const p2d_element = $(`#${id}`)
        p2d_element.append(div)

        // addProgressBar({
        //     startingValue: particleSize,
        //     minValue: 1,
        //     maxValue: canvas.height / 3,
        //     element: div,
        //     className: 'progress-bar',
        //     callback: event => {
        //         particleSize = event.path[0].value
        //         console.log(particleSize)
        //     },
        // })

        addButton('clear', erase)
        addButton('quadtree', () => {
            useQuadtree ^= 1
        })
        addButton('optimized quadtree bounds', () => {
            useOptimizedBounds ^= 1
        })
        addButton('show quadtree nodes', () => {
            showNodes ^= 1
        })
        addButton('collisions', () => {
            enableCollision ^= 1
        })
        addButton('gravity', () => {
            enableGravity ^= 1
        })
        addButton('info', () => {
            showInfopanel ^= 1
        })
        addButton('pause', () => {
            paused ^= 1
        })
    }

    const erase = () => {
        particles.length = 0
        particleColors.length = 0
    }

    p.draw = () => {
        updateValues()

        if (p.mouseIsPressed) {
            spawnParticle()
        }

        p.background(backColor.r, backColor.g, backColor.b)

        if (useQuadtree) {
            let min = new v2(0, 0)
            let max = new v2(canvas.width, canvas.height)

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
                p.noFill()
                p.stroke(frontColor.r, frontColor.g, frontColor.b)
                p.strokeWeight(1)

                for (const bound of allBounds) {
                    const x = bound.min.x
                    const y = bound.min.y
                    const width = bound.max.x - bound.min.x - 1
                    const height = bound.max.y - bound.min.y - 1
                    p.rect(x, y, width, height)
                }
            }
            let neighbours = []
            quadtree.getNeighbourNodes(neighbours, {
                position: new v2(mouse.x, mouse.y),
                radius: particleSize,
            })

            p.push()
            neighbours.forEach(node => {
                // Draw the bound
                const bound = node.bounds
                const x = bound.min.x
                const y = bound.min.y
                const width = bound.max.x - bound.min.x - 1
                const height = bound.max.y - bound.min.y - 1
                p.stroke(
                    boundsHighlightColor.r,
                    boundsHighlightColor.g,
                    boundsHighlightColor.b
                )
                p.strokeWeight(3.0)
                p.rect(x, y, width, height)

                // Draw the particles
                node.indices.forEach(index => {
                    particleColors[index] = boundsHighlightColor
                })
            })
            p.pop()
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
                        width: canvas.width,
                        height: canvas.height,
                    },
                    { x: 0.0, y: gravityY }
                )
            }
        }
        drawAllParticles()
        drawUI()
    }

    const drawAllParticles = () => {
        const particleCount = particles.length
        p.stroke(backColor.r, backColor.g, backColor.b)
        p.strokeWeight(0.5)
        for (let i = 0; i < particleCount; i++) {
            const particle = particles[i]
            const position = particle.position
            const radius = particle.radius
            const color = particleColors[i]

            p.fill(color.r, color.g, color.b)
            p.circle(position.x, position.y, radius)
            particleColors[i] = {
                r: frontColor.r,
                g: frontColor.g,
                b: frontColor.b,
            }
        }
    }

    const spawnParticle = () => {
        if (
            mouse.x > 0 &&
            mouse.x < canvas.width &&
            mouse.y > 0 &&
            mouse.y < canvas.height
        ) {
            for (let i = 0; i < 2; ++i) {
                let particle = new Particle(mouse.x, mouse.y, particleSize)
                particles.push(particle)
                particleColors.push(particleColor)
            }
        }
        return false
    }
}

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

new p5(sketch)
