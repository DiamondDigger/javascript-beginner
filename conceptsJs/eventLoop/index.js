setTimeout(()=>{
    console.log('Inside timeout, after 0 sec')
},0)

console.log('Start')
console.log('Start1')
console.log('Start2')
console.log('Start3')
console.log('Start4')
console.log('Start5')

console.log('End')

function time5sec(){
    console.log('time5sec')
}

setTimeout(()=>{
    console.log(`Inside timeout, after ${time}`)
}, time = 3000)

setTimeout(time5sec, 5000)
