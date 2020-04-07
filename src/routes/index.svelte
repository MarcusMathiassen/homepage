<script>
    import Hero from '../components/hero.svelte'
    import Blog from '../components/blog.svelte'
    import Repos from '../components/repos.svelte'
    import Videos from '../components/youtube-videos.svelte'

    const components = [Repos, Videos, Blog]

</script>

<style lang='sass'>
    .column
        margin-bottom: 1rem // add some spacing below each component.
</style>

<template lang="pug">
    svelte:head
        title Marcus Mathiassen - Homepage
    Hero
    section.section
        .container
            .columns.is-centered.is-multiline
                +each('components as component')
                    .column.is-narrow
                        .container
                            svelte:component(this='{component}')
</template>
