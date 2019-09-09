const fetch = require('node-fetch')
const apiRoot = 'https://www.googleapis.com/youtube/v3/'

const YOUTUBE_TOKEN = process.env.YOUTUBE_TOKEN
const USERNAME = 'MathiassenMarcus'

exports.handler = async (event, context) => {

    const apiCall1 = `${apiRoot}channels?part=contentDetails&forUsername=${USERNAME}&key=${YOUTUBE_TOKEN}`
    const UPLOADS_KEY = await fetch(apiCall1).then(res => res.json()).then(json =>json.items[0].contentDetails.relatedPlaylists.uploads)

    const apiCall2 = `${apiRoot}playlistItems?part=snippet&maxResults=50&playlistId=${UPLOADS_KEY}&key=${YOUTUBE_TOKEN}`
    const items = await fetch(apiCall2).then(res => res.json()).then(json => json.items)

    let comma_separated_list_of_video_ids = items.map(item => item.snippet.resourceId.videoId).join(',')
    const statisticsApiCall = `${apiRoot}videos?part=statistics&id=${comma_separated_list_of_video_ids}&maxResults=50&key=${YOUTUBE_TOKEN}`
    const statisticsItems = await fetch(statisticsApiCall).then(res => res.json()).then(json => json.items)
    
    let res = []
    for (let i = 0; i < items.length; ++i) {
        res.push({
          id: items[i].snippet.resourceId.videoId,
          title: items[i].snippet.title,
          thumbnails: items[i].snippet.thumbnails,
          statistics: statisticsItems[i].statistics
        })
    }

    return {
      statusCode: 200,
      body: JSON.stringify(res)
    }
}
