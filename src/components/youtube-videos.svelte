<script>
    import { onMount } from 'svelte'
    import { cachedFetch } from './utils/utility'

    let videos = []

    onMount(async () => {
        videos = await cachedFetch('/.netlify/functions/youtube')

        // Sort the videos based on view count
        videos.sort((a, b) => parseInt(b.statistics.viewCount) - parseInt(a.statistics.viewCount))
    })
</script>

<style lang="sass">

.videos
    text-align: left
    display: inline-block
    h2
        padding: 5px
        text-align: left
        font-weight: 500
    @media only screen and (max-width: 600px)
        margin: 0
        padding: 0
a
    padding: 0
    margin: 0

.video
    display: flex
    opacity: 0.0
    @media only screen and (max-width: 600px)
        font-size: 0.75em
    
    animation: reveal 1s forwards

.title
    font-size: 1em
    padding: 0
    margin: 0
    text-align: left

.badge
    background: var(--secondary)
    margin: 0
    padding: 5px
    border-radius: var(--border-radius)
    font-size: 0.75em

.badge--item
    margin: 2px

@keyframes reveal
    from
        opacity: 0.0
    to
        opacity: 0.8
</style>

<ul class="videos">
    <h2>Videos</h2>
    {#each videos as video, i}            
        <li class="video" style="animation-delay: {i*10}ms">
            <a href="https://www.youtube.com/watch?v={video.id}" target="_blank" rel="noopener">
                <span class="title">{video.title}
                <div class="badge">
                    {#if parseInt(video.statistics.viewCount)}
                    <span class="badge--item">
                        <i class="fas fa-eye" style="color: var(--c_carib_green)"></i>
                        <span style="color: var(--c_carib_green)"> {video.statistics.viewCount} </span>
                    </span>
                    {/if}
                    {#if parseInt(video.statistics.likeCount)}
                    <span class="badge--item">
                        <i class="fas fa-heart" style="color: var(--apple_red)"></i>
                        <span style="color: var(--apple_red)">{video.statistics.likeCount}</span>
                    </span>
                    {/if}
                    {#if parseInt(video.statistics.commentCount)}
                    <span class="badge--item">
                        <i class="fas fa-comment" style="color: var(--apple_blue)"></i>
                        <span style="color: var(--apple_blue)">{video.statistics.commentCount}</span>
                    </span>
                    {/if}
                <!-- <img class="thumbnail" alt="thumbnail" src={video.thumbnails.default.url}/> -->
                </div>
                </span>
            </a>
        </li>
    {/each}
</ul>
