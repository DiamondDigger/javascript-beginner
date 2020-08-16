const policeman = {
    name: 'Jack',
    id: 25,
    gun: 'glock',
    car: true,
    states: ['Mx', 'Br', 'St'],
    'computed prop': 'Computed Value',
    ['ID_token_' + (5 / 10 + 431).toFixed(0)] : 'egct#245',
    greet() {
        console.log('Im officer Jack, can I help you?')
    }
}

console.log(policeman)
policeman.greet()
console.log(policeman["computed prop"])
console.log('gun was deleted : ', delete policeman.gun)
console.log(policeman);
policeman.states.push('Vu')
console.log(policeman.states);

policeman.id = undefined
console.log('set policeman.id = undefined');
const {name, id: idNumber = 313, states} = policeman
console.log(name, idNumber, states);
