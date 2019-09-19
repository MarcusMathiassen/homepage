<script lang="coffee">
    import Hero from '../components/hero.svelte'
    import Repos from '../components/repos.svelte'
    import YoutubeVideos from '../components/youtube-videos.svelte'
    import ShaderToy from '../components/shadertoy.svelte'
    components = [Hero, Repos, YoutubeVideos]
</script>

<style lang="sass">

.container
    margin: 0
    padding: 0
    display: flex
    flex-flow: row wrap
    justify-content: space-around

    @media only screen and (max-width: 600px)
        margin: 0
        padding: 0
        justify-content: left
        &:first-child
            justify-content: center

.container--item
    margin: 0px

    @media only screen and (max-width: 600px)
        margin: 20px

</style>

<template lang="pug">

    svelte:head
        title Home

    ul.container
        +each('components as component')
            li.container--item
                svelte:component(this='{component}')

</template>
