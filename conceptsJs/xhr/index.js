const requestUrl = 'https://jsonplaceholder.typicode.com/users'

const xhr = new XMLHttpRequest()

function sendRequest(method, url){
    return new Promise((resolve, reject) => {

        xhr.open(method, url)

        xhr.responseType = 'json'

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

        xhr.send()

    })
}

sendRequest('GET', requestUrl)
    .then((data)=> console.log(data))
    .catch((e)=> console.error(e))