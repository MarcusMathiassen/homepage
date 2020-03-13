<script>
    import { onMount } from 'svelte'
    import { cachedFetch } from './utils/utility'

    import { stores } from '@sapper/app'
    const { session } = stores()

    let videos = $session.videos || null

    ;(async () => {
        // videos = await cachedFetch('/.netlify/functions/youtube')
        videos.sort((a, b) => b.statistics.viewCount - a.statistics.viewCount)
    })()

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

@media (max-width: 600px)
    .likes, .comments
        display: none

</style>

<template lang="pug">
    h3
        a.is-size-4(href="https://www.youtube.com/user/MathiassenMarcus/videos" target="_blank" rel="noopener" aria-label="Checkout my YouTube")
            span.icon(style='margin-right: 0.5rem'): i.fab.fa-youtube
            span Videos

    ul: +each('videos as video')
        li: a.button.is-text.is-block.has-text-left(href="https://www.youtube.com/watch?v={video.id}" target="_blank" rel="noopener")
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
