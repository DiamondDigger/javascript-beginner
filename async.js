// const timeout = setTimeout(() => {
//     console.log(`After ${sec}`)
//     console.log('end of setTimeout')
// }, sec = 6000)
//
// // clearTimeout(timeout)
//
// let index = 0
// const interval = setInterval(() => {
//     index++
//     console.log(`After ${intervalTime}`)
//     if (index === 5) {
//         clearInterval(interval)
//         console.log('1end of setInterval')
//         console.log('2end of setInterval')
//         console.log('3end of setInterval')
//         console.log('4end of setInterval')
//     }
//
// }, intervalTime = 1000)
//
// if (index === 5) {
//     clearInterval(interval)
// }
//
// const delay = (callback, wait = 1000) => {
//     setTimeout(callback, wait)
// }
//
// delay(() => {
//     console.log('After 2 seconds')
// }, 2000)

const delayPromise = (wait = 1000) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve()
            reject('UPS! Something is gonna wrong. Please, try again!')
        }, wait)
    })
}
//
// delayPromise(2000)
//     .then(() => {
//         console.log('logic from promise after 2 seconds')
//     })
//     .catch((err) => console.error('Error: ', err))
//     .finally(() => console.log('Finally'))

const getData = () => new Promise(resolve => resolve([1,1,2,3,5,8,13]))

// getData().then(data => console.log(data))

async function  asyncExample() {
    try {
        await delayPromise(2000)
        const data = await getData()
        console.log('Data', data)
    } catch (e){
        console.log(e)
    } finally {
        console.log('Finally block')
    }
}

asyncExample()