<script lang="coffee">

    import { onMount } from 'svelte'
    import { cachedFetch } from './utils/utility'

    videos = []

    onMount () =>
        videos = await cachedFetch '/.netlify/functions/youtube'

        # Sort the videos based on view count
        videos.sort (a, b) => parseInt(b.statistics.viewCount) - parseInt(a.statistics.viewCount)

</script>

<style lang="sass">

.videos
    text-align: left
    display: inline-block
    h2
        margin: 5px
        text-align: left
        font-size: 1.50em
        font-weight: 700
    @media only screen and (max-width: 600px)
        margin: 0
        padding: 0
        font-size: 0.85em
a
    padding: 0
    margin: 0

.video
    display: flex
    opacity: 0.0
    animation: reveal 1s forwards

.title
    font-size: 1em
    padding: 0
    margin: 0
    margin-right: 5px
    text-align: left

.badge
    display: inline-block
    margin-left: 5px
    background: var(--secondary)
    padding: 5px
    padding-top: 2px
    padding-bottom: 2px
    border-radius: var(--border-radius)
    font-size: 0.75em

.badge--item
    margin: 2px

@keyframes reveal
    from
        opacity: 0.0
    to
        opacity: 1.0

span
    margin-left: 2px

</style>


<template lang="pug">

    ul.videos
        h2 Videos
        +each('videos as video, i')
            li.video(style="animation-delay: {i*10}ms")
                a(href="https://www.youtube.com/watch?v={video.id}" target="_blank" rel="noopener")
                    span.title {video.title}
                    .badge
                        +if('parseInt(video.statistics.viewCount)')
                            span.badge--item
                                i(class="fas fa-eye" style="color: var(--systemGray)")
                                span(style="color: var(--systemGray)") {video.statistics.viewCount}
                        +if('parseInt(video.statistics.likeCount)')
                            span.badge--item
                                i(class="fas fa-heart" style="color: var(--systemRed)")
                                span(style="color: var(--systemRed)") {video.statistics.likeCount}
                        +if('parseInt(video.statistics.commentCount)')
                            span.badge--item
                                i(class="fas fa-comment" style="color: var(--systemTeal)")
                                span(style="color: var(--systemTeal)") {video.statistics.commentCount}
</template>
