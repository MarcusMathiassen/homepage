<script>
    import Hero from '../components/hero.svelte'
    import Blog from '../components/blog.svelte'
    import Repos from '../components/repos.svelte'
    import Videos from '../components/youtube-videos.svelte'

    const components = [Blog, Repos, Videos]

</script>

<template lang="pug">
    svelte:head
        title Marcus Mathiassen - Homepage
    
    Hero
    section.section
        .container
            .columns.is-centered.is-multiline
                +each('components as component')
                    .column.is-narrow
                        svelte:component(this='{component}')
</template>
