import axios from 'axios'

const apiRoot = 'https://jsonplaceholder.typicode.com/todos/1'

exports.handler = async (event, context) => {
    return axios({
        method: 'get',
        url: apiRoot,
    })
        .then(res => res.json())
        .then(text => text)
}
