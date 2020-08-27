const requestUrl = 'https://jsonplaceholder.typicode.com/users'

const xhr = new XMLHttpRequest()
function sendRequest(method, url, body=null){
    return fetch(url)
        .then(response => {
           return response.json()
        })
}

sendRequest('GET', requestUrl)
    .then((data) => console.log(data))
    .catch((e) => console.error(e))

const body = {
    name: 'Linkoln',
    project: 'Siriuis',
    id: 101
}

// sendRequest('POST', requestUrl, body)
//     .then((data)=> console.log(data))
//     .catch((e) => console.error(e))