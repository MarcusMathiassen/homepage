<script>

    import Hero from '../components/hero.svelte'
    import Blog from '../components/blog.svelte'
    import Repos from '../components/repos.svelte'
    import Videos from '../components/youtube-videos.svelte'

</script>

<style lang='sass'>

    .column
        margin-bottom: 1rem // add some spacing below each component.

</style>

<template lang="pug">

    title Marcus Mathiassen - Homepage
    Hero
    section.section
        .container
            .columns.is-centered.is-multiline(style='justify-content: center')
                .column.is-narrow: Repos
                .column.is-narrow: Videos
                .column.is-narrow: Blog

</template>
