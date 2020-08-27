const requestUrl = 'https://jsonplaceholder.typicode.com/users'

function sendRequest(method, url, body=null){
    const headers = {
        'Content-Type': 'application/json'
    }
    return fetch(url,{
        method: method,
        body: JSON.stringify(body),
        headers: headers
    })
        .then(response => {
            if(response.ok){
                return response.json()
            }
            return response.json()
                .then((e) => {
                const error = new Error()
                error.data = e
                throw error
            })
        })
}

// sendRequest('GET', requestUrl)
//     .then((data) => console.log(data))
//     .catch((e) => console.error(e))

const body = {
    name: 'Linkoln',
    project: 'Siriuis',
    role: 'President'
}

sendRequest('POST', requestUrl, body)
    .then((data)=> console.log(data))
    .catch((e) => console.error(e))