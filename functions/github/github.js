const fetch = require('node-fetch')
const apiRoot = 'https://api.github.com/graphql'

const githubQuery_GetLast30UpdatedRepos = `
{
  viewer {
    repositories(first: 30, isFork: false, privacy: PUBLIC, orderBy: {field: UPDATED_AT, direction: DESC}) {
        nodes {
          primaryLanguage {
            name
            color
          }
          stargazers {
            totalCount
          }
          forkCount
          createdAt
          nameWithOwner
          name
          updatedAt
          pushedAt
          createdAt
          description
          url
          licenseInfo {
            name
          }
        }
    }
  }
}

`

exports.handler = async (event, context) => {
    return fetch(apiRoot, {
        method: 'POST',
        headers: {
            Authorization: `token ${process.env.GITHUB_TOKEN}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: githubQuery_GetLast30UpdatedRepos,
        }),
    })
        .then(res => res.json())
        .then(json => {
            const ret = {
                statusCode: 200,
                body: JSON.stringify(json.data.viewer.repositories.nodes),
            }
            return ret
        })
}
