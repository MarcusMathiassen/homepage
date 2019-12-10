<script lang="coffee">
    import Hero from './components/hero.svelte'
    import Repos from './components/repos.svelte'
    import YoutubeVideos from './components/youtube-videos.svelte'
    components = [Hero, Repos, YoutubeVideos]
</script>

<style lang="sass">

.container
    margin: 0px
    padding: 20px
    display: flex
    flex-flow: row wrap
    justify-content: center
    @media only screen and (max-width: 980px)
        margin: 0
        padding: 0
        justify-content: left
        &:first-child
            justify-content: center

.container--item
    margin: 5px
    padding: 5px
    @media only screen and (max-width: 980px)
        margin: 20px
        padding: 0

</style>

<template lang="pug">
    svelte:head
        title Marcus Mathiassen - Homepage

    .container
        +each('components as component')
            .container--item
                svelte:component(this='{component}')

</template>
