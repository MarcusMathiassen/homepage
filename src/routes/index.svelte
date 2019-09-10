<script>
    import { onMount } from 'svelte'
    import Repos from '../components/repos.svelte'
    import YoutubeVideos from '../components/youtube-videos.svelte'
</script>

<style lang="sass">
.landing-page--hero
    margin: 20px
    background-image: var(--avatar)
    background-size: cover
    width: 300px
    height: 300px

.container
    padding: 0
    display: flex
    flex-flow: row wrap
    justify-content: space-around
</style>

<svelte:head>
    <title>Home</title>
</svelte:head>

<div class="container">
    <!-- <div class="container--hero">
        <div class="landing-page--hero"></div>
        <p class="landing-page--tit">
            Marcus Mathiassen
        </p>
        <p class="landing-page--subtitle">
            I do compilers and languages.<br>
            Interested in systems design and UX.
        </p>
    </div> -->
    <Repos/>
    <YoutubeVideos/>
</div>
