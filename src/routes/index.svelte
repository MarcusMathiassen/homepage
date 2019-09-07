<script>
    import P2D from '../components/p2d.svelte'

    let lastRepo = ""
    let repos = ""

    fetch("/.netlify/functions/github").then(res => res.json()).then(json => {
        console.log(json)
        repos = node
        lastRepo = node[0]
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
    p currently working on:
    a(href="{lastRepo.url}") #[h1 name {lastRepo.name}]
    h2 description: {lastRepo.description}
    h3 lanuage: {lastRepo.primaryLanguage.name}
    h3 stars: {lastRepo.stargazers.totalCount}

</template>
<h1>Repos</h1>
<ul>
	{#each repos as repo}
    <li>
        a(href="{repo.url}") #[h1 name {repo.name}]
        h2 description: {lastRepo.description}
        h3 lanuage: {lastRepo.primaryLanguage.name}
        h3 stars: {lastRepo.stargazers.totalCount}
    </li>
	{/each}
</ul>
