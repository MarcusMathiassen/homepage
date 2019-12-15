<script lang="coffee">
    import Hero from './components/hero.svelte'
    import Repos from './components/repos.svelte'
    import Videos from './components/youtube-videos.svelte'
    components = [Repos, Videos]
</script>

<template lang="pug">
    svelte:head
        title Marcus Mathiassen - Homepage

    section.section
        .container
            .columns.is-centered
                .column.is-half 
                    Hero
            .columns
                +each('components as component')
                    .column.is-half
                        svelte:component(this='{component}')

</template>
