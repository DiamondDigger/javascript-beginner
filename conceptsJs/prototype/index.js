const alien = new Object({
    name: 'Rudolf',
    age: 250,
    greet(){
        console.log('Hello from Pluto!')
    }
})

Object.prototype.sayHello = function(){
    console.log('Hello')
}

const human = Object.create(alien)

