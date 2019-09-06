const axios = require('axios')

const apiRoot = 'https://jsonplaceholder.typicode.com/todos/1'

exports.handler = async (event, context) => {
    return axios
        .get(apiRoot)
        .then(res => res.data)
        .then(json => {
            return {
                statusCode: 200,
                body: JSON.stringify(json),
            }
        })
    // .then(json => console.log(console.log(JSON.stringify(json))))
}
