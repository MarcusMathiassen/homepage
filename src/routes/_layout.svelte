<script>
    
    import Nav from '../components/Nav.svelte'
    import Spices from '../components/spices.svelte'
    import MovingBackground from '../components/moving-background.svelte'
    import { onMount } from 'svelte'
    
    export let segment
    $: segment = segment === undefined ? 'home' : segment
        
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

<template lang="pug">     
    <!-- Nav('{segment}') -->
    main
        slot
    Spices

</template>
