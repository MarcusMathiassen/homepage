<script>

    import Hello from '../components/Hello.svelte'
    import Goodbye from '../components/Goodbye.svelte'
    import Blog from '../components/blog.svelte'
    import Repos from '../components/repos.svelte'
    import Videos from '../components/youtube-videos.svelte'

</script>

<style lang='sass'>
    .line
        border-radius: 20px
        background: rgb(216,216,226)
    .column
        margin-bottom: 1rem // add some spacing below each component.

</style>

<template lang="pug">
    title Marcus Mathiassen
    .section(style='padding: 1rem 1.5rem')
        .container
            Hello
    .section
        .container
            .columns.is-centered.is-multiline(style='justify-content: center')
                .column.is-narrow: Repos
                .column.is-narrow: Videos
                .column.is-narrow: Blog
    .section
        .container
            Goodbye
</template>
