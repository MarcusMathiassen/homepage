<script>

    import { stores } from '@sapper/app'
    const { session } = stores()

    let videos = $session.videos

    import Select from './Select.svelte'
    const sorters = {
        views: (a, b) => b.statistics.viewCount -  a.statistics.viewCount,
        likes: (a, b) => b.statistics.likeCount -  a.statistics.likeCount,
        //comments: (a, b) => b.statistics.commentCount -  b.statistics.commentCount
    }

    const options = Object.keys(sorters)
    let selected = options[0]

    const sortBy = option => videos = videos.sort(sorters[option])

    $: sortBy(selected)

</script>
<style lang='sass'>
.views
    font-weight: 700
    color: rgba(var(--text-base), 0.8)
    background: rgba(var(--text-base), 0.1)

.comments
    font-weight: 700
    background: #64a9f5

.likes
    font-weight: 700
    background: #ff776e

@media (prefers-color-scheme: light)
    .likes, .comments
        color: rgba(var(--text-base), 0.8)

@media (prefers-color-scheme: dark)
    .likes, .comments
        color: rgba(var(--background-base), 0.8)

@media (max-width: 400px)
    .likes, .comments
        display: none
.name
    color: var(--text) !important
</style>

<template lang="pug">

.youtube
    .columns.is-vcentered.is-mobile.is-gapless
        .column.is-narrow
            h3.has-text-weight-bold
                a.is-size-3.youtube(href="https://www.youtube.com/user/MathiassenMarcus/videos" target="_blank" rel="noopener" aria-label="Checkout my YouTube")
                    span Videos
        .column.is-narrow
            Select(bind:value='{selected}' items='{options}')
    ul: +each('videos as video')
        li: a.is-flex.button(style='justify-content: end;' href="https://www.youtube.com/watch?v={video.id}" target="_blank" rel="noopener")
            span.name {video.title}
            span.badge
                +if('parseInt(video.statistics.viewCount)')
                    span.tag.views
                        span.icon: i.fas.fa-user
                        span {video.statistics.viewCount}
                
                +if('parseInt(video.statistics.likeCount)')
                    span.tag.likes
                        span.icon: i.fas.fa-heart
                        span {video.statistics.likeCount}
                
                +if('parseInt(video.statistics.commentCount)')
                    span.tag.comments
                        span.icon: i.fas.fa-comment
                        span {video.statistics.commentCount}
</template>
