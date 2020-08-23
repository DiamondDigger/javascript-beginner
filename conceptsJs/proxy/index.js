const alien = {
    planet: 'Pluto',
    name: 'Miraco',
    ship: 'supersonic',
    age: 567,
    enemy: false
}

//  Objects
const op = new Proxy(alien, {
    get(target, prop) {
        console.log(`Getting prop '${prop}' from target...`)
        return target[prop]
    },
    set(target, prop, value) {
        if (prop in target) {
            target[prop] = value;
            console.log(`Successfully changed prop '${prop}' in target `)
        } else {
            throw new Error(`No such field '${prop}' in target object!`)
        }
    },
    has(target, prop) {
        console.log(Object.keys(target))
        const keys = Object.keys(target);
        return keys.includes(prop + '')
    },
    deleteProperty(target, prop) {
        console.log(`Deleting '${prop}'...`)
        delete target[prop]
        return true
    }
})

//  Functions
const log = (text = '') => `Log: ${text}`

const fp = new Proxy(log, {
    apply(target, thisArg, argArray) {
        console.log('Applying log function...')

        return target.apply(thisArg, argArray).toUpperCase()
    }
})

//  Classes
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

const PersonProxy = new Proxy(Person, {
    construct(target, args) {
        console.log('Creating ...')

        return new target(...args)
    }
})

const p = new PersonProxy('Gimmy', 345)