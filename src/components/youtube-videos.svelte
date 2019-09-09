<script>
    import { onMount } from 'svelte'

    let videos = []

    const getApi = async (root, storage = sessionStorage) => {
        const result = storage.getItem(root)
        if (result !== null) {
            console.log("fetching youtube data... from storage")
            return JSON.parse(result)
        } else {
            console.log("fetching youtube data... youtube")
            const res = await fetch(root)
            const json = await res.json()
            storage.setItem(root, JSON.stringify(json))
            return json
        }
    }

    onMount(async () => {
        videos = await getApi('/.netlify/functions/youtube')
        videos.sort((a, b) => parseInt(b.statistics.viewCount) - parseInt(a.statistics.viewCount))
    })
</script>

<style lang="sass">
li, ul
    margin: 5px
    margin-top: 10px
    list-style-type: none

span
    font-family: var(--font)

.container
    display: flex
    flex-flow: row wrap
    justify-content: space-around

.container--videos
    text-align: center

.videos
    margin: 20px
    display: inline-block
    h2
        padding: 5px
        text-align: left
        font-weight: 500
    @media only screen and (max-width: 600px)
        margin: 0
        padding: 0

.video
    display: flex
    margin: 5px
    padding: 5px
    opacity: 0.0
    &:hover
        opacity: 1.0
    @media only screen and (max-width: 600px)
        font-size: 0.75em
    
    animation: reveal 1s forwards

span
    font-family: var(--font)

.badge
    color: var(--text)
    background: var(--secondary)
    margin: 5x
    padding: 10px
    border-radius: var(--border-radius)
    font-size: 0.75em
    span
        margin: 2px

.thumbnail
    margin: 5px
    vertical-align: middle
    width: 50px
    height: 50px
    border-radius: var(--border-radius)

@keyframes reveal
    from
        opacity: 0.0
    to
        opacity: 0.8
</style>

<div class="container--videos">
    <ul class="videos">
        <h2>Youtube Videos</h2>
        {#each videos as video, i}            
            <li class="video" style="animation-delay: {i*10}ms">
                <a href="https://www.youtube.com/watch?v={video.id}" target="_blank" rel="noopener">
                    <img class="thumbnail" src={video.thumbnails.default.url}/>
                    <span class="title">{video.title}</span>
                    <div class="badge">
                        {#if parseInt(video.statistics.viewCount)} <span style="color: var(--apple_purple)"> <i class="fas fa-eye" style="color: var(--apple_purple)"></i> {video.statistics.viewCount}</span> {/if}
                        {#if parseInt(video.statistics.likeCount)} <span style="color: var(--apple_green)"> <i class="fas fa-thumbs-up" style="color: var(--apple_green)"></i> {video.statistics.likeCount}</span> {/if}
                        {#if parseInt(video.statistics.commentCount)} <span style="color: var(--apple_teal)"> <i class="fas fa-comment" style="color: var(--apple_teal)"></i> {video.statistics.commentCount}</span> {/if}
                        {#if parseInt(video.statistics.favoriteCount)} <span style="color: var(--apple_red)"> <i class="fas fa-heart" style="color: var(--apple_red)"></i> {video.statistics.favoriteCount}</span> {/if}
                        <!-- {#if parseInt(video.statistics.dislikeCount)} <span> <i class="fas fa-thumbs-down"> </i> {video.statistics.dislikeCount}</span> {/if} -->
                    </div>
                </a>
            </li>
        {/each}
    </ul>
</div>
