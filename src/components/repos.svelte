<script lang="coffee">

import { onMount } from 'svelte'
import { cachedFetch } from './utils/utility'

repos = []

languageColorChoicesIter = 0
languageColors = new Map()
languageColorChoices = [
    'var(--systemBlue)',
    'var(--systemGreen)',
    'var(--systemIndigo)',
    'var(--systemTeal)',
    'var(--systemPurple)',
    'var(--systemRed)',
    'var(--systemYellow)',
    'var(--systemPink)',
    'var(--systemOrange)'
    'var(--systemGray)',
]

starBias = 1.5
forkBias = 2.0 # value forks more than stars

onMount () =>
    repos = await cachedFetch '/.netlify/functions/github'
    repos.sort (a, b) => (b.stargazers.totalCount*starBias + b.forkCount*forkBias) -  (a.stargazers.totalCount*starBias + a.forkCount*forkBias)

    for repo in repos
        name = repo.primaryLanguage.name
        color = if languageColors.has(name)
                    languageColors.get(name)
                else
                    languageColorChoices[languageColorChoicesIter++ % languageColorChoices.length]
        languageColors.set(name, color)

</script>

<style lang="sass">

.repos
    text-align: left
    display: inline-block
    h2
        margin: 5px
        text-align: left
        font-size: 1.50em
        font-weight: 700

    @media only screen and (max-width: 600px)
        margin: 0
        padding: 0
        font-size: 1.5em
a
    padding: 0
    margin: 0

.repo
    display: flex
    opacity: 0.0
    animation: reveal 1s forwards

.title
    font-size: 1em
    padding: 0
    margin: 0
    margin-right: 5px
    text-align: left

.badge
    display: inline-block
    margin-left: 5px
    background: var(--secondary)
    padding: 10px
    padding-top: 2px
    padding-bottom: 2px
    border-radius: var(--border-radius)
    font-size: 0.75em

.badge--item
    margin-left: 5px
    margin-right: 5px

@keyframes reveal
    from
        opacity: 0.0
    to
        opacity: 1.0

span
    margin-left: 3px

</style>

<template lang="pug">

ul.repos
    h2 Repositories
    +each('repos as repo, i')
        li.repo(style="animation-delay: {i*10}ms")
            a(href="{repo.url}" target="_blank" rel="noopener")
                span.title {repo.name}
                .badge
                    +if('repo.primaryLanguage')
                        span.badge--item.lanugage(style="font-weight: 700; color: {languageColors.get(repo.primaryLanguage.name)}") {repo.primaryLanguage.name}
                    +if('repo.stargazers.totalCount')
                        span.badge--item
                            i(class="fas fa-star" style="color: var(--systemOrange)")
                            span(style="color: var(--systemOrange)") {repo.stargazers.totalCount}
                    +if('repo.forkCount')
                        span.badge--item
                            i(class="fas fa-code-branch" style="color: #c94da0")
                            span(style="color: #c94da0") {repo.forkCount}
</template>
