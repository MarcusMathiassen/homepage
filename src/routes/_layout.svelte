<script context="module">

    import data from '../data.json'

    export async function preload(page, session) {
        session.posts = data.posts
        session.repos = data.repos
        session.videos = data.videos
        return {}
    }

</script>

<script>
	
    import Nav from '../components/Nav.svelte'
    export let segment

</script>

<style global lang="sass" src='../global.sass'></style>

<template lang='pug'>

    Nav('{segment}')
    main
        slot

</template>
