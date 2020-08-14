const policeman = {
    name: 'Jack',
    id: 25,
    gun: true,
    car: true,
    states: ['Mx', 'Br', 'St'],
    greet() {
        console.log('Im officer Jack, can I help you?')
    }
}

console.log(policeman)
policeman.greet()