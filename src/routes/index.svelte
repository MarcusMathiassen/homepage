<script>
    import { onMount } from 'svelte'
    import Hero from '../components/hero.svelte'
    import Repos from '../components/repos.svelte'
    import YoutubeVideos from '../components/youtube-videos.svelte'
        
    let components = []
    onMount(async () => components = [Hero, Repos, YoutubeVideos])
</script>

<style lang="sass">
.container
    margin: 0
    padding: 0
    display: flex
    flex-flow: row wrap
    justify-content: center

    @media only screen and (max-width: 800px)
        margin: 0
        padding: 0

.container--item
    margin: 20px

</style>

<svelte:head>
    <title>Home</title>
</svelte:head>

<div class="container">
    {#each components as component}
        <div class="container--item">
            <svelte:component this={component}/>
        </div>
    {/each}
</div>
