<script lang="coffee">
    import Spices from './components/spices.svelte'
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
            
            .box
                .columns(style="justify-content: space-around")
                    +each('components as component')
                        .column.is-narrow
                            svelte:component(this='{component}')
        
</template>
