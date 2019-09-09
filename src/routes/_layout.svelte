<script>
    import Footer from '../components/Footer.svelte'
    import Nav from '../components/Nav.svelte'
    import MovingBackground from '../components/moving-background.svelte'
    export let segment

    export let movingBackgroundOptions = {
        particleCount: 10,
        verticesPerParticle: 12,
    }

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

<MovingBackground {movingBackgroundOptions}/>
<Nav {segment} />
<main>
    <slot />
</main>
<Footer />
