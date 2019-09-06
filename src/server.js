import sirv from 'sirv'
import polka from 'polka'
import compression from 'compression'
import * as sapper from '@sapper/server'

console.log('Hello from server!')

const { PORT, NODE_ENV, GITHUB_TOKEN } = process.env
const dev = NODE_ENV === 'development'

console.log(GITHUB_TOKEN)

polka() // You can also use Express
    .use(
        compression({ threshold: 0 }),
        sirv('static', { dev }),
        sapper.middleware()
    )
    .listen(PORT, err => {
        if (err) console.log('error', err)
        console.log(`> Running on ${PORT}`)
    })
1
