<script lang="coffee">

    import { onMount } from 'svelte'
    import { cachedFetch, rawNumToSuffixed } from './utils/utility'

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
    forkBias = 2.0 # slight bias towards forks

    onMount () =>
        # Get repositories from github
        repos = await cachedFetch '/.netlify/functions/github'

        # Sort repositories based on star and fork count, with a bias towards forks.
        repos.sort (a, b) => (b.stargazers.totalCount*starBias + b.forkCount*forkBias) -  (a.stargazers.totalCount*starBias + a.forkCount*forkBias)

        # Setup the (name, color) pair for the programming languages and the color used for them on Github.
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
    margin: 0
    padding: 0
    text-align: left
    display: inline-block
    h2
        margin: 5px
        text-align: left
        font-size: 1.5em
        font-weight: 700

    @media only screen and (max-width: 800px)
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
    font-weight: 400

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

.repos
    h2 Repositories
    ul
        +each('repos as repo, i')
            li.repo(style="animation-delay: {i*10}ms")
                a(href="{repo.url}" target="_blank" rel="noopener")
                    span.title {repo.name}
                    .badge
                        +if('repo.primaryLanguage')
                            span.badge--item.lanugage(style="font-weight: 700; color: {languageColors.get(repo.primaryLanguage.name)}") {repo.primaryLanguage.name}
                        +if('repo.stargazers.totalCount')
                            span.badge--item
                                i(class="fontello icon-star" style="color: var(--systemOrange)")
                                span(style="color: var(--systemOrange)") {rawNumToSuffixed(parseInt(repo.stargazers.totalCount))}
                        +if('repo.forkCount')
                            span.badge--item
                                i(class="fontello icon-fork" style="color: var(--systemPurple)")
                                span(style="color: var(--systemPurple)") {rawNumToSuffixed(parseInt(repo.forkCount))}
</template>
