const fetch = require('node-fetch')

exports.handler = async (event, context) => {
    let bodyContent = ''
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
                    Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
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
                    bodyContent = `Currently working on <h1>${nameOfLastRepoUpdated}</h1> <p>${desc}</p>`
                })
        })

    return bodyContent
}
