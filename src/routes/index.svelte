<script>
    import P2D from '../components/p2d.svelte'

    let repos = ""

    fetch("/.netlify/functions/github").then(res => res.json()).then(json => {
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
    margin: 5px
    margin-top: 10px
    list-style-type: none

.repo--name
    font-size: 1em
    padding: 0
    margin: 0
.repo--badges
    margin: 5px
    padding: 5px
    border-radius: 5px
    border: 1px solid var(--text)
    font-size: 0.75em
    span
        margin: 2px
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
<br>
<h2>Repositories</h2>
<ul>
	{#each repos as repo}
    <li>
        <a href="{repo.node.url}" target="_blank" rel="noopener">
        <span class="repo--name">{repo.node.name}
            <span class="repo--badges">
                {#if repo.node.primaryLanguage}
                    <span style="color: {repo.node.primaryLanguage.color}"> {repo.node.primaryLanguage.name}</span>
                {/if}
                {#if repo.node.stargazers.totalCount}
                    <span>
                        <i class="fas fa-star">{repo.node.stargazers.totalCount}</i>
                    </span>
                {/if}
                {#if repo.node.forkCount}
                    <span>
                        <i class="fas fa-code-branch"> {repo.node.forkCount}</i>
                    </span>
                {/if}
            </span>
        </span>
        </a>
    </li>
	{/each}
</ul>
