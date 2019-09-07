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

li, ul
    list-style-type: none
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
        <a href="{repo.node.url}" target="_blank" rel="noopener"> <h3> {repo.node.name}:
        {#if repo.node.primaryLanguage}
            <span style="background: {repo.node.primaryLanguage.color}"> {repo.node.primaryLanguage.name}</span>
        {/if}
        <i class="fas fa-star">{repo.node.stargazers.totalCount}</i>
        {#if repo.node.description}
            <span>: {repo.node.description} </span>
        {/if}
        </h3>
        </a>
    </li>
	{/each}
</ul>
