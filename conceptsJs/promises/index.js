console.log('Requesting data...')

setTimouts
setTimeout(()=>{
    console.log('Preparing data...')

    const backendData = {
        server: 'aws',
        port: 2000,
        status: 'working'
    }

    setTimeout(()=>{
        backendData.modified = true
        console.log('Data received', backendData)
    } ,2000)

}, 5000)

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Preparing data...')
        const backendData = {
            name: 'aws',
            port: 2000,
            status: 'working'
        }
        resolve(backendData)
    }, 5000)
})

p.then((data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true
            resolve(data)
        }, 2000)
    })
})
    .then((clientData) => {
        console.log('Data received', clientData)
    })
    .catch(err => console.error('Error: ', err))
    .finally(() => console.log('Text from finally block'))

const sleep = ms => {
    return new Promise(resolve => {
        resolve(ms)
    },ms)
}

sleep(2000).then(ms => console.log(`after ${ms/1000} sec`))
sleep(3000).then(ms => console.log(`after ${ms/1000} sec`))