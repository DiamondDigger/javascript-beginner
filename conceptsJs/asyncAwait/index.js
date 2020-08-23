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

async function fetchAsyncTodos(){
    console.log('Async fetch todo started...')
    try{
        await delay(2000)
        const response = await fetch(url)
        const data = await response.json()
        console.log('Data: ', data)
    }catch(e){
        console.error('Error: ', e)
    }finally{
        console.log('yap!')
    }
}

fetchAsyncTodos()
    .then(()=> console.log('Everything is done! Congrats!!!'))