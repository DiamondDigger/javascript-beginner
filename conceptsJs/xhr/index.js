const requestUrl = 'https://jsonplaceholder.typicode.com/users'

const xhr = new XMLHttpRequest()

xhr.open('GET', requestUrl)

xhr.responseType = 'json'

xhr.onload = () => {
    if (xhr.status >= 400) {
        console.error(xhr.response);
    } else {
        console.log(xhr.response);
    }
}

xhr.onerror = () => {
    console.error(xhr.response)
}

xhr.send()