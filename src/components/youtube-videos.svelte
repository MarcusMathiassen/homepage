<script lang="coffee">

    import { onMount } from 'svelte'
    import { cachedFetch, rawNumToSuffixed } from './utils/utility'

    videos = []

    onMount () =>
        videos = await cachedFetch '/.netlify/functions/youtube'

        # Sort the videos based on view count
        videos.sort (a, b) => parseInt(b.statistics.viewCount) - parseInt(a.statistics.viewCount)

</script>

<style lang="sass">

.videos
    margin: 0
    padding: 0
    text-align: left
    display: inline-block
    h2
        margin: 5px
        text-align: left
        font-size: 1.5em
        font-weight: 700
    @media only screen and (max-width: 800px)
        margin: 0
        padding: 0
        font-size: 1.5em
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
    font-weight: 400

.badge--item
    margin-left: 5px
    margin-right: 5px

@keyframes reveal
    from
        opacity: 0.0
    to
        opacity: 1.0

span
    margin-left: 3px

</style>


<template lang="pug">

.videos
    h2 Videos
    ul
        +each('videos as video, i')
            li.video(style="animation-delay: {i*10}ms")
                a(href="https://www.youtube.com/watch?v={video.id}" target="_blank" rel="noopener")
                    span.title {video.title}
                    .badge
                        +if('parseInt(video.statistics.viewCount)')
                            span.badge--item
                                i(class="fontello icon-eye" style="color: var(--systemIndigo)")
                                span(style="color: var(--systemIndigo)") {rawNumToSuffixed(parseInt(video.statistics.viewCount))}
                        +if('parseInt(video.statistics.likeCount)')
                            span.badge--item
                                i(class="fontello icon-heart" style="color: var(--systemRed)")
                                span(style="color: var(--systemRed)") {rawNumToSuffixed(parseInt(video.statistics.likeCount))}
                        +if('parseInt(video.statistics.commentCount)')
                            span.badge--item
                                i(class="fontello icon-comment" style="color: var(--systemTeal)")
                                span(style="color: var(--systemTeal)") {rawNumToSuffixed(parseInt(video.statistics.commentCount))}
</template>
