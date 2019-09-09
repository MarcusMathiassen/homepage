<script>
    import Footer from '../components/Footer.svelte'
    import Nav from '../components/Nav.svelte'
    import MovingBackground from '../components/moving-background.svelte'
    export let segment

</script>

<style>
    main {
        position: relative;
        max-width: 56em;
        padding: 2em;
        margin: 0 auto;
        box-sizing: border-box;
    }
</style>

<!-- <MovingBackground movingBackgroundOptions = {
{
        particleCount: 1000,
        verticesPerParticle: 3,
        particleSize: 2,
}    
}/> -->
<Nav {segment} />
<main>
    <slot />
</main>
<Footer />
