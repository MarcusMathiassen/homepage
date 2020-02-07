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

<template lang="pug">
    a(style="font-size: 1.5em; font-weight: 700" href="https://github.com/MarcusMathiassen" target="_blank" rel="noopener" aria-label="Checkout my Github")
        span.icon.fontello.icon-github
        span Repositories
    ul
        +each('repos as repo, i')
            li
                a(href="{repo.url}" target="_blank" rel="noopener") 
                    span.list-item--name {repo.name}
                    span.badge
                        +if('repo.primaryLanguage')
                            span.badge--item(style="font-weight: 700; color: {languageColors.get(repo.primaryLanguage.name)}") {repo.primaryLanguage.name}
                        +if('repo.stargazers.totalCount')
                            span.badge--item
                                i(class="fontello icon-star" style="color: var(--systemOrange)")
                                span(style="color: var(--systemOrange)") {repo.stargazers.totalCount}
                        +if('repo.forkCount')
                            span.badge--item
                                i(class="fontello icon-fork" style="color: var(--systemPurple)")
                                span(style="color: var(--systemPurple)") {repo.forkCount}
</template>
