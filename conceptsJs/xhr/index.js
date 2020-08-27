const requestUrl = 'https://jsonplaceholder.typicode.com/users'

const xhr = new XMLHttpRequest()

function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {

        xhr.open(method, url)

        xhr.responseType = 'json'
        xhr.setRequestHeader('Content-Type', 'application/json')

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response);
            }
        }

        xhr.onerror = () => {
            reject(xhr.response)
        }

        xhr.send(JSON.stringify(body));

    })
}

// sendRequest('GET', requestUrl)
//     .then((data) => console.log(data))
//     .catch((e) => console.error(e))

const body = {
    name: 'Linkoln',
    project: 'Siriuis',
    id: 101
}

sendRequest('POST', requestUrl, body)