const delay = (ms) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
}

const url = 'https://jsonplaceholder.typicode.com/todos'

function fetchTodos() {
    console.log('Fetch todo started...')
    return delay(3000)
        .then(() => {
            return fetch(url)
        })
        .then(response => response.json())
}

fetchTodos()
    .then(data => console.log('Data: ', data))
    .catch(e => console.error(e))