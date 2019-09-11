<script lang="coffee">
    
    import Hero from '../components/hero.svelte'
    import Repos from '../components/repos.svelte'
    import YoutubeVideos from '../components/youtube-videos.svelte'

    components = [Hero, Repos, YoutubeVideos]

</script>

<style lang="sass">

.container
    margin: 0
    padding: 0
    display: flex
    flex-flow: row wrap
    justify-content: center

    @media only screen and (max-width: 800px)
        margin: 0
        padding: 0

.container--item
    margin: 20px

</style>

<svelte:head>

    <title>Home</title>

</svelte:head>

<template lang="pug">
    
    .container
        +each('components as component')
            .container--item
                svelte:component(this='{component}')

</template>
