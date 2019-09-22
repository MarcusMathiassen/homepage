<script>

    import Nav from '../components/Nav.svelte'
    import Spices from '../components/spices.svelte'
    import MovingBackground from '../components/moving-background.svelte'
    import ShaderToy from '../components/shadertoy.svelte'
    import { getTime, randFloat } from '../components/utils/utility'
    import { v2 } from '../components/utils/math'
    import { onMount } from 'svelte'

    export let segment
    $: segment = segment === undefined ? 'home' : segment

    let mouse = {
        x: 0,
        y: 0
    }

    const fs = `
    out vec4 frag;
    void main() {

        vec2 uv = gl_FragCoord.xy;

        // Circle
        vec2 center = iResolution.xy * 0.5;
        center.x *= sin(iTime);
        float radius = iResolution.y / 2.25;
        vec3 color = vec3(0.38, 0.16, 0.89);

        float d = length(center - uv) - radius;
        float t = clamp(d, 0.0, 1.0);

        vec4 circle = vec4(color, 1.0 - t);
        frag = circle;
    }`

    const gravity = -0.981

    function lerp(p, t, s) {
        p.x += (t.x - p.x)*s;
        p.y += (t.y - p.y)*s;
        return p
    }

    function handleMouse(e) {
        const dpi = window.devicePixelRatio || 1
        mouse.x = e.clientX * dpi
        mouse.y = (window.innerHeight - e.clientY) * dpi
    }

    let particleCount = 1000
    let x = 0
    let y = 0
    const sqrtGrid = Math.floor(Math.sqrt(particleCount))

    const particleInit = (p) => {

        const canvasWidth = window.innerWidth * window.devicePixelRatio || 1
        const canvasHeight = window.innerHeight * window.devicePixelRatio || 1

        const col = (canvasWidth) / sqrtGrid
        const row = (canvasHeight) / sqrtGrid

        p.pos.x = x
        p.pos.y = y

        p.color.r = randFloat(0,1)
        p.color.g = randFloat(0,1)
        p.color.b = randFloat(0,1)
        p.color.a = 1

        x += col
        if (x > canvasWidth) {
            y += row
            x = col
        }

        return p
    }

    const particleUpdate = (p) => {

        const canvasWidth = window.innerWidth * window.devicePixelRatio || 1
        const canvasHeight = window.innerHeight * window.devicePixelRatio || 1

        p.color.a = 1
        p.size = Math.min(v2.distance(p.pos, mouse)*0.001*Math.abs(Math.sin(getTime())), sqrtGrid)

        return p
    }

</script>

<style lang="sass">
    main
        margin: 20px
        width: 100%
        height: 100%
        position: relative
        padding: 0
        box-sizing: border-box
</style>

<template lang="pug">
    ShaderToy
    Nav(segment='{segment}')
    main: slot
    Spices
</template>
