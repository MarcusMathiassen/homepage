const fetch = require('node-fetch')
const apiRoot = 'https://api.github.com/graphql'

exports.handler = async (event, context) => {
    return fetch(apiRoot, {
        method: 'POST',
        headers: {
            Authorization: `token ${process.env.GITHUB_TOKEN}`,
            'Content-Type': 'application/x-www-form-urlencoded',
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

            return fetch(apiRoot, {
                method: 'POST',
                headers: {
                    Authorization: `token ${process.env.GITHUB_TOKEN}`,
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({
                    query: `query { viewer { repository(name:"${nameOfLastRepoUpdated}") { description } } }`,
                }),
            })
                .then(res => res.json())
                .then(json => {
                    const desc = json.data.viewer.repository.description
                    return {
                        statusCode: 200,
                        body: JSON.stringify({
                            lastRepoUpdated: nameOfLastRepoUpdated,
                            lastRepoUpdatedDesc: desc,
                        }),
                    }
                })
        })
}
