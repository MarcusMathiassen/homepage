<script>
    import Footer from '../components/Footer.svelte'
    import Nav from '../components/Nav.svelte'
    import MovingBackground from '../components/moving-background.svelte'
    export let segment

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
<Nav {segment} />
<main>
    <slot />
</main>
<Footer />
