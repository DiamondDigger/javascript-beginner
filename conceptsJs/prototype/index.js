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
human.name = 'Baculuy'

const str = new String('I come here with my own mission.')


