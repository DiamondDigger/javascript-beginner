function hello() {
    console.log('Hello', this)
}

const alien = {
    name: 'Djiko',
    age: 245,
    sayHello: hello,
    sayHelloWindow: hello.bind(document),
    logInfo(job, phone) {
        console.group(`${this.name} info: `)
        console.log(`Alien name is ${this.name}`)
        console.log(`Alien age is ${this.age}`)
        console.log(`Alien job is ${job}`)
        console.log(`Alien phone is ${phone}`)
        console.groupEnd()
    }
}

const human = {
    name: 'Baculuy',
    age: 45
}

alien.logInfo.bind(human,'mechanic', '23-34-2354')()
alien.logInfo.call(human,'mechanic', '23-34-2354')
alien.logInfo.apply(human,['mechanic', '23-34-2354'])

