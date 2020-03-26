<script>
    import { stores } from '@sapper/app'
    const { session } = stores()

    let repos = $session.repos

    // Sort repositories based on star and fork count, with a bias towards forks.
    const starBias = 1.0
    const forkBias = 2.0
    repos.sort((a, b) => (b.stargazers.totalCount*starBias + b.forkCount*forkBias) -  (a.stargazers.totalCount*starBias + a.forkCount*forkBias))

    const getContrastColor = lang => lang.name === 'C' ? 'rgb(var(--text--color-base--dark))' : 'hsl(0, 0%, 14%)'

</script>
<style lang='sass'>
.language
    font-weight: 700

.forks
    font-weight: 700
    background: var(--systemPurple)

.stars
    font-weight: 700
    background: var(--systemYellow)


@media (prefers-color-scheme: dark)
    .forks, .stars
        color: rgba(var(--background-base), 0.8)

@media (prefers-color-scheme: light)
    .forks, .stars
        color: rgba(var(--text-base), 0.8)
.name
    color: var(--text) !important
</style>

<template lang="pug">
.github
    h3.has-text-weight-bold
        a.is-size-3.github(href="https://github.com/MarcusMathiassen" target="_blank" rel="noopener" aria-label="Checkout my Github")
            span Github
    ul: +each('repos as item')
        li: a.is-flex.button(style='justify-content: end;' href="{item.url}" target="_blank" rel="noopener")
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
