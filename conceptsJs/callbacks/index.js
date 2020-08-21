console.log('Start')
console.log('End')

function time5sec(){
    console.log('time5sec')
}

setTimeout(()=>{
    console.log(`Inside timeout, after ${time}`)
}, time = 3000)

setTimeout(time5sec, 5000)