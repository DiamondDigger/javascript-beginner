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

const delay = (callback, wait = 1000) => {
    setTimeout(callback, wait)
}

delay(() => {
    console.log('After 2 seconds')
}, 2000)