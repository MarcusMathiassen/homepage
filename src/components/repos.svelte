<script>

    import Select from './Select.svelte'

    import { stores } from '@sapper/app'
    const { session } = stores()

    let repos = $session.repos
    repos = repos.filter(x => !x.isPrivate)

    const getContrastColor = lang => lang.name === 'C' ? 'rgb(var(--text--color-base--dark))' : 'hsl(0, 0%, 14%)'

    const sorters = {
        stars: (a, b) => (b.stargazers.totalCount) -  (a.stargazers.totalCount),
        forks: (a, b) => (b.forkCount) -  (a.forkCount)
    }

    const options = Object.keys(sorters)
    let selected = options[0]

    const sortBy = option => repos = repos.sort(sorters[option])

    $: sortBy(selected)

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
    .columns.is-vcentered.is-mobile.is-gapless
        .column.is-narrow
            h3.has-text-weight-bold
                a.is-size-3.github(href="https://github.com/MarcusMathiassen" target="_blank" rel="noopener" aria-label="Checkout my Github")
                    span Repos
        .column.is-narrow
            Select(bind:value='{selected}' items='{options}')
    ul: +each('repos as item')
        li: a.is-flex.button(style='justify-content: start;' href="{item.url}" target="_blank" rel="noopener")
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
