const alien = {
    planet: 'Pluto',
    name: 'Miraco',
    ship: 'supersonic',
    age: 567,
    enemy: false
}

const op = new Proxy(alien,{
    get(target, prop){
        console.log(`Getting prop '${prop}' from target...`)
        return target[prop]
    },
    set(target, prop,value){
        if (prop in target) {
            target[prop] = value;
            console.log(`Successfully changed prop '${prop}' in target `)
        } else {
            throw new Error(`No such field '${prop}' in target object!`)
        }
    }
})