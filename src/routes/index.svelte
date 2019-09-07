<script>
    import P2D from '../components/p2d.svelte'

    let lastRepo = ""
    let repos = ""

    fetch("/.netlify/functions/github").then(res => res.json()).then(json => {
        console.log(json)
        repos = json
        lastRepo = json[0]
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
        <a href="{repo.url}" target="_blank" rel="noopener"> <h1> name {repo.name}] </h1> </a>
        {#if {repo.description}}
            <h2> description: {repo.description} </h2>
        {/if}
        {#if {repo.primaryLanguage}}
            <h3> lanuage: {repo.primaryLanguage.name}</h3>
        {/if}
        <h3> stars: {repo.stargazers.totalCount}</h3>
    </li>
	{/each}
</ul>
