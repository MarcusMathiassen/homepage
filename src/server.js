import sirv from 'sirv'
import polka from 'polka'
import compression from 'compression'
import * as sapper from '@sapper/server'

require('dotenv').config()

console.log('Hello from server!')
console.log(process.env)

const { PORT, NODE_ENV } = process.env
const dev = NODE_ENV === 'development'

polka() // You can also use Express
    .use(
        compression({ threshold: 0 }),
        sirv('static', { dev }),
        sapper.middleware()
    )
    .get('/users', (req, res) => {
        console.log(`~> Hello from polka! user!`)
    })
    .listen(PORT, err => {
        if (err) console.log('error', err)
        console.log(`> Running on ${PORT}`)
    })
1
