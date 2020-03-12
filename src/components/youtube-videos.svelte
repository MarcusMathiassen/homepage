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
    background: rgba(var(--text-base), 0.1)

.comments
    font-weight: 700
    background: #64a9f5

.likes
    font-weight: 700
    background: #ff776e

</style>

<template lang="pug">
    h3
        a.is-size-4.has-text-dark(href="https://www.youtube.com/user/MathiassenMarcus/videos" target="_blank" rel="noopener" aria-label="Checkout my YouTube")
            span.icon(style='margin-right: 0.5rem'): i.fab.fa-youtube
            span Videos

    ul: +each('videos as video')
        li: a.button.is-text.is-block.has-text-left(href="https://www.youtube.com/watch?v={video.id}" target="_blank" rel="noopener")
            span.name {video.title}
            span.badge
                +if('parseInt(video.statistics.viewCount)')
                    span.tag.views.has-text-dark
                        span.icon: i.fas.fa-user
                        span {video.statistics.viewCount}
                
                +if('parseInt(video.statistics.likeCount)')
                    span.tag.likes.has-text-light
                        span.icon: i.fas.fa-heart
                        span {video.statistics.likeCount}
                
                +if('parseInt(video.statistics.commentCount)')
                    span.tag.comments.has-text-light
                        span.icon: i.fas.fa-comment
                        span {video.statistics.commentCount}
</template>
