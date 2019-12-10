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

.list
    h2 Videos
    ul
        +each('videos as video, i')
            li.list--item(style="animation-delay: {i*10}ms")
                a(href="https://www.youtube.com/watch?v={video.id}" target="_blank" rel="noopener")
                    span.list--item-title {video.title}
                    .badge
                        +if('parseInt(video.statistics.viewCount)')
                            span.badge--item
                                i(class="fontello icon-eye" style="color: var(--systemIndigo)")
                                span(style="color: var(--systemIndigo)") {video.statistics.viewCount}
                        +if('parseInt(video.statistics.likeCount)')
                            span.badge--item
                                i(class="fontello icon-heart" style="color: var(--systemRed)")
                                span(style="color: var(--systemRed)") {video.statistics.likeCount}
                        +if('parseInt(video.statistics.commentCount)')
                            span.badge--item
                                i(class="fontello icon-comment" style="color: var(--systemTeal)")
                                span(style="color: var(--systemTeal)") {video.statistics.commentCount}
</template>
