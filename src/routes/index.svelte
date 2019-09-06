<script>
    import P2D from '../components/p2d.svelte'

       fetch(`https://api.github.com/graphql`, {
        method: 'post',
        headers: {
            Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `query { viewer { repositories(first: 20) { edges { node { name pushedAt } } } } }`,
        }),
    })
        .then(res => res.json())
        .then(json => {
            var edges = json.data.viewer.repositories.edges
            // Sort the repositories by pushdate
            edges.sort((a, b) => {
                return (
                    new Date(b.node.pushedAt).getTime() -
                    new Date(a.node.pushedAt).getTime()
                )
            })
            const nameOfLastRepoUpdated = edges[0].node.name
            fetch(`https://api.github.com/graphql`, {
                method: 'post',
                headers: {
                    Authorization:
                        `bearer ${process.env.GITHUB_TOKEN}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query: `query { viewer { repository(name:"${nameOfLastRepoUpdated}") { description } } }`,
                }),
            })
                .then(res => res.json())
                .then(json => {
                    console.log(json)
                    const desc = json.data.viewer.repository.description
                    // $(
                    //     '#last-repo-updated'
                    // ).innerHTML = `Currently working on <h1>${nameOfLastRepoUpdated}</h1> <p>${desc}</p>`
                })
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
