function hello() {
    console.log('Hello', this)
}

const alien = {
    name: 'Djiko',
    age: 245,
    sayHello: hello,
    sayHelloWindow: hello.bind(document),
    logInfo() {
        console.log(`Alien name is ${this.name}`)
        console.log(`Alien age is ${this.age}`)
    }
}

const human = {
    name: 'Baculuy',
    age: 45
}

alien.logInfo.bind(human)()

