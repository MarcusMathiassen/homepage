<script>
    import P2D from '../components/p2d.svelte'

    let repos = ""

    fetch("/.netlify/functions/github").then(res => res.json()).then(json => {
        console.log(json)
        repos = json
    })

</script>

<style lang="sass">
.landing-page--hero
    width: 50%
    margin: 20px auto
    display: block
    background-image: var(--avatar)
    background-size: cover
    width: 300px
    height: 300px
</style>

<svelte:head>
    <title>Home</title>
</svelte:head>

<template lang="pug">
    .landing-page--hero
    p.landing-page--title Marcus Mathiassen
    p.landing-page--subtitle.
        I do compilers and languages.
        Interested in systems design and UX.
</template>

<h1>Repos</h1>
<ul>
	{#each repos as repo}
    <li>
        <a href="{repo.node.url}" target="_blank" rel="noopener"> <h3> name {repo.node.name} </h3> </a>
        {#if repo.node.description}
            <h4> {repo.node.description} </h4>
        {/if}
        {#if repo.node.primaryLanguage}
            {#if repo.node.primaryLanguage.name === 'javascript'}
                <i class="fab fa-js"></i>
            {:else}
                <p> {repo.node.primaryLanguage.name}</p>
            {/if}
        {/if}
        <i class="fas fa-star">{repo.node.stargazers.totalCount}</i>
    </li>
	{/each}
</ul>
