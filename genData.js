const fetch = require('node-fetch')

const getPosts = async () => {
    const firebase = require('firebase')

    // Required for side-effects
    require('firebase/firestore')
    // Initialize Firebase
    if (!firebase.apps.length)
        firebase.initializeApp({
            apiKey: process.env.FIREBASE_TOKEN,
            authDomain: 'homepage-109b6.firebaseapp.com',
            databaseURL: 'https://homepage-109b6.firebaseio.com',
            projectId: 'homepage-109b6',
            storageBucket: 'homepage-109b6.appspot.com',
            messagingSenderId: '543017541768',
            appId: '1:543017541768:web:5941e25cab34252ea97f3d',
            measurementId: 'G-ZGWFFK2LXK',
        })
    const db = firebase.firestore()
    // Add the Firebase products that you want to use
    const snapshot = await db.collection('blogposts').get()
    const posts = snapshot.docs.map(doc => doc.data())
    return posts
}

const getVideos = async () => {
    const apiRoot = 'https://www.googleapis.com/youtube/v3/'
    const YOUTUBE_TOKEN = process.env.YOUTUBE_TOKEN
    const USERNAME = 'MathiassenMarcus'

    const apiCall1 = `${apiRoot}channels?part=contentDetails&forUsername=${USERNAME}&key=${YOUTUBE_TOKEN}`

    let UPLOADS_KEY// = await fetch(apiCall1)
     try {
        UPLOADS_KEY = await fetch(apiCall1)
        UPLOADS_KEY = await UPLOADS_KEY.json()
    } catch(err) {
        alert(err)
    }
    UPLOADS_KEY = UPLOADS_KEY.items[0].contentDetails.relatedPlaylists.uploads

    const apiCall2 = `${apiRoot}playlistItems?part=snippet&maxResults=50&playlistId=${UPLOADS_KEY}&key=${YOUTUBE_TOKEN}`
    let items = await fetch(apiCall2)
    items = await items.json()
    items = items.items

    let comma_separated_list_of_video_ids = items
        .map(item => item.snippet.resourceId.videoId)
        .join(',')
    const statisticsApiCall = `${apiRoot}videos?part=statistics&id=${comma_separated_list_of_video_ids}&maxResults=50&key=${YOUTUBE_TOKEN}`
    let statisticsItems = await fetch(statisticsApiCall)
    statisticsItems = await statisticsItems.json()
    statisticsItems = statisticsItems.items

    let videos = Array(items.length)
    for (let i = 0; i < items.length; ++i) {
        videos[i] = {
            id: items[i].snippet.resourceId.videoId,
            title: items[i].snippet.title,
            thumbnails: items[i].snippet.thumbnails,
            statistics: statisticsItems[i].statistics,
        }
    }

    return videos
}

const getRepos = async () => {
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
                                name
                                url
                              }
                          }
                        }
                      }
                      `
    const res = await fetch(apiRoot, {
        method: 'POST',
        headers: {
            Authorization: `token ${process.env.GITHUB_TOKEN}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: githubQuery_GetLast30UpdatedRepos,
        }),
    })
    const json = await res.json()
    const repos = json.data.viewer.repositories.nodes

    return repos
}

;(async () => {
    const [posts, repos, videos] = await Promise.all([
        getPosts(),
        getRepos(),
        getVideos(),
    ])

    const content = JSON.stringify({
        posts: posts,
        repos: repos,
        videos: videos
    })

    fs.writeFile("output.json", content, 'utf8', err => {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
    })

})()
