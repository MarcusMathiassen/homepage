import fetch from 'node-fetch'

exports.handler = async (event, context) => {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => json)
}
