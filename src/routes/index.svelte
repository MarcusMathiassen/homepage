<script>
    import { onMount } from 'svelte'
    import Repos from '../components/repos.svelte'
    import YoutubeVideos from '../components/youtube-videos.svelte'
</script>

<style lang="sass">
.landing-page--title
    font-size: 1.5em
    font-weight: 700
    padding: 0
    margin: 0

.landing-page--subtitle
    margin: 0
    padding: 0
    font-size: 0.75em
    opacity: 0.8

.landing-page--hero
    margin: 0
    margin-bottom: 20px
    background-image: var(--avatar)
    background-size: cover
    width: 300px
    height: 300px

.container--item
    margin: 20px
    @media only screen and (max-width: 750px)
        margin: 5px
.container
    padding: 0
    display: flex
    flex-flow: row wrap
    justify-content: space-around

    @media only screen and (max-width: 600px)
        justify-content: left

</style>

<svelte:head>
    <title>Home</title>
</svelte:head>

<div class="container">
    <div class="container--item">
        <div class="landing-page--hero"></div>
        <p class="landing-page--title">
            Marcus Mathiassen
        </p>
        <p class="landing-page--subtitle">
            I do compilers and languages.<br>
            Interested in systems design and UX.
        </p>
    </div>
    <div class="container--item"> <Repos/> </div>
    <div class="container--item"> <YoutubeVideos/> </div>
</div>
