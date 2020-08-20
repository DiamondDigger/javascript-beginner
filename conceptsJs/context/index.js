function hello() {
    console.log('Hello', this)
}

const alien = {
    name: 'Djiko',
    age: 245,
    sayHello: hello

}

