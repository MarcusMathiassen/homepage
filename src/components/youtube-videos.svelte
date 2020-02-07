<script lang="coffee">
    import { onMount } from 'svelte'
    import { cachedFetch } from './utils/utility'

    videos = []

    onMount () =>
        videos = await cachedFetch '/.netlify/functions/youtube'

        # Sort the videos by views
        videos.sort (a, b) => parseInt(b.statistics.viewCount) - parseInt(a.statistics.viewCount)

</script>

<template lang="pug">
    a.has-addons(style="font-size: 1.5em; font-weight: 700" href="https://www.youtube.com/user/MathiassenMarcus/videos" target="_blank" rel="noopener" aria-label="Checkout my YouTube")
        icon.fontello.icon-youtube
        span Videos
    ul
        +each('videos as video, i')
            li
                a(href="https://www.youtube.com/watch?v={video.id}" target="_blank" rel="noopener")
                    span.list-item--name  {video.title}
                    span.badge
                        +if('parseInt(video.statistics.viewCount)')
                            span.badge--item
                                i(class="fontello icon-user" style="color: var(--systemGray)")
                                span(style="color: var(--systemGray)") {video.statistics.viewCount}
                        +if('parseInt(video.statistics.likeCount)')
                            span.badge--item
                                i(class="fontello icon-heart" style="color: var(--systemRed)")
                                span(style="color: var(--systemRed)") {video.statistics.likeCount}
                        +if('parseInt(video.statistics.commentCount)')
                            span.badge--item
                                i(class="fontello icon-comment" style="color: var(--systemTeal)")
                                span(style="color: var(--systemTeal)") {video.statistics.commentCount}
</template>
