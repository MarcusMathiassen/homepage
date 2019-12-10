<script lang="coffee">
    import Hero from './components/hero.svelte'
    import Repos from './components/repos.svelte'
    import YoutubeVideos from './components/youtube-videos.svelte'
    components = [Hero, Repos, YoutubeVideos]
</script>

<style lang="sass">

.container
    display: flex
    flex-flow: row wrap
    justify-content: center
    margin: 0
    padding: 0

.container--item
    border-radius: 10px
    margin: 10px
    padding: 20px
    height: 100%

</style>

<template lang="pug">
    svelte:head
        title Marcus Mathiassen - Homepage

    .container
        +each('components as component')
            .container--item
                svelte:component(this='{component}')

</template>
