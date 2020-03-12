<script>

    import { onMount } from 'svelte'
    import List from './List.svelte'
    import { cachedFetch } from './utils/utility'
    import contrast from 'contrast'

    import { stores } from '@sapper/app'
    const { session } = stores()

    let repos = $session.repos || null

    ;(async () => {
        // // Get repositories from github
        // repos = await cachedFetch('/.netlify/functions/github')

        // // Sort repositories based on star and fork count, with a bias towards forks.
        const starBias = 1.5
        const forkBias = 2.0
        repos.sort((a, b) => (b.stargazers.totalCount*starBias + b.forkCount*forkBias) -  (a.stargazers.totalCount*starBias + a.forkCount*forkBias))
    })()

    const getContrastColor = (lang) => lang.name === 'C' ? 'rgb(var(--text--color-base--dark))' : 'hsl(0, 0%, 29%)'

</script>
<style lang='sass'>

.language
    font-weight: 700
    color: rgba(var(--text--color-base--dark), 0.9)

.forks
    font-weight: 700
    background: #a7dea4

.stars
    font-weight: 700
    background: #ffe167

</style>

<template lang="pug">
        h3
            a.is-size-4.has-text-dark(href="https://github.com/MarcusMathiassen" target="_blank" rel="noopener" aria-label="Checkout my Github")
                span.icon(style='margin-right: 0.5rem'): i.fab.fa-github
                span Repos

        ul: +each('repos as item')
            li: a.button.is-text.is-block.has-text-left(href="{item.url}" target="_blank" rel="noopener")
                span.name {item.name}
                span.badge
                    +if('item.primaryLanguage')
                        span.tag.language(style="background: {item.primaryLanguage.color}; color: {getContrastColor(item.primaryLanguage)}") {item.primaryLanguage.name}
                    
                    +if('item.stargazers.totalCount')
                        span.tag.stars
                            span.icon: i.fas.fa-star
                            span {item.stargazers.totalCount}
                    
                    +if('item.forkCount')
                        span.tag.forks
                            span.icon: i.fas.fa-code-branch
                            span {item.forkCount}

</template>
