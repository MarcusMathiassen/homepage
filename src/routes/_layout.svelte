<script>
    
    import Nav from '../components/Nav.svelte'
    import Spices from '../components/spices.svelte'
    import MovingBackground from '../components/moving-background.svelte'
    import { onMount } from 'svelte'
    import { theme, themeStyle } from '../components/stores.js'
    
    export let segment
    $: segment = segment === undefined ? 'home' : segment
        
    let isWebGL2Supported = 0
    onMount(() => isWebGL2Supported = () => !!document.createElement('canvas').getContext('webgl2'))

    let showParticles = false
    theme.subscribe(v => showParticles = v === 'dark')

</script>

<style lang="sass">
    main
        width: 100%
        height: 100%
        position: relative
        padding: 2em
        margin: 0 auto
        box-sizing: border-box
        @media only screen and (max-width: 600px)
            margin: 0
            padding: 0
</style>
{#if isWebGL2Supported && showParticles}
    <MovingBackground movingBackgroundOptions = {
    {
            particleCount: 100,
            verticesPerParticle: 3,
            particleSize: 2,
    }    
    }/>
{/if}
<template lang="pug">     
    <!-- Nav('{segment}') -->
    main
        slot
    Spices

</template>
