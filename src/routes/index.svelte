<script>
    import P2D from '../components/p2d.svelte'

    let response = ""

    fetch("/.netlify/functions/github").then(res => res.json()).then(json => {
            response = json['body']
    })

</script>

<style lang="sass">
.landing-page--hero
    width: 50%
    margin: 20px auto
    display: block
    background-image: var(--avatar)
    background-size: cover
    width: 300px
    height: 300px
</style>

<svelte:head>
    <title>Home</title>
</svelte:head>

<template lang="pug">
    .landing-page--hero
    p.landing-page--title Marcus Mathiassen
    p.landing-page--subtitle.
        I do compilers and languages.
        Interested in systems design and UX.
    <!-- p currently working on: {response} -->
</template>
<button on:click={handleClick}>
	response: {response}
</button>
