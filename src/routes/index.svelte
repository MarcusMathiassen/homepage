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

    // hack
    @media screen and (max-width: 600px)
        .things
            padding: 0
        .group-big
            border-radius: 0
</style>

<template lang="pug">
    title Marcus Mathiassen
    .section(style='padding: 1rem 1.5rem')
        .container
            Hello
    .section.things
        .container.group-big
            .columns.is-centered.is-multiline(style='justify-content: center')
                .column.is-narrow: Repos
                .column.is-narrow: Videos
                .column.is-narrow: Blog
    .section
        .container
            Goodbye
</template>
