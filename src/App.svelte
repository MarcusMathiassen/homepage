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
    Spices
    Hero
    br
    .columns
        +each('components as component')
            .column
                svelte:component(this='{component}')
            
</template>
