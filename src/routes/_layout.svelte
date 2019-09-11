<script>
    
    import Nav from '../components/Nav.svelte'
    import MovingBackground from '../components/moving-background.svelte'
    export let segment

    $: segment = segment === undefined ? 'home' : segment

</script>

<style lang="sass">
    main
        position: relative
        padding: 2em
        margin: 0 auto
        box-sizing: border-box
        @media only screen and (max-width: 600px)
            margin: 0
            padding: 0
</style>

<!-- <MovingBackground movingBackgroundOptions = {
{
        particleCount: 100,
        verticesPerParticle: 3,
        particleSize: 2,
}    
}/> -->

<template lang="pug">
    
    Nav('{segment}')
    main
        slot

</template>
