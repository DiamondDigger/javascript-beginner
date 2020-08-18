const policeman = {
    name: 'Jack',
    id: 25,
    gun: 'glock',
    car: true,
    states: ['Mx', 'Br', 'St'],
    'computed prop': 'Computed Value',
    ['ID_token_' + (5 / 10 + 431).toFixed(0)]: 'egct#245',
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

for (let key in policeman) {
    if (policeman.hasOwnProperty(key)) {
        console.log('Key: ', key);
        console.log('Value: ', policeman[key]);
    }
}

console.log('From Object method')
Object.keys(policeman).forEach((key) => {
    console.log('Key: ', key);
    console.log('Value: ', policeman[key]);
})

const logger = {
    keys() {
        console.log('Object keys: ', Object.keys(this))
    },
    keysAndValues() {
        const keys = Object.keys(this)
        keys.forEach((key) => {
            console.log(`${key} : ${this[key]}`)
        })
    },
    withParams(top = false, between = false, bottom = false){
        if (top) {
            console.log('-----------Start-----------')
        }
        Object.keys(this).forEach((key, index, array) => {
            console.log(`${key} : ${this[key]}`)
            if (between && index !== array.length - 1) {
                console.log('----------------------')
            }
        })

        if (bottom) {
            console.log('-----------Bottom-----------')
        }
    }
}


console.log('From .bind')
const bound = logger.keys.bind(policeman);
bound()

console.log('From .call')
logger.keys.call(policeman)

console.log('Keys and Values of policeman:')
logger.keysAndValues.call(policeman)
console.log('Keys and Values of logger:')
logger.keysAndValues.call(logger)

console.log('With params from .call :')
logger.withParams.call(policeman,true, true, true)
console.log('With params from .apply: ')
logger.withParams.apply(policeman,[true, true, true])
