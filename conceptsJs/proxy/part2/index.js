//add default value
const addDefaultValue = (target, defaultValue = 0 ) => {

    return new Proxy(target, {
        get: (obj, prop) => {
           return (prop in obj ? obj[prop] : defaultValue)
        }
    })
}

const position = {
    x: 34,
    y: 645
}

const p = addDefaultValue(position, 5)

//hidden properties
const withHiddenParams = (target, prefix = '_')=>{
    return new Proxy(target , {
        has:(obj, prop)=> prop in obj && !prop.startsWith(prefix),
        ownKeys: (obj) => Reflect.ownKeys(obj)
            .filter(p => p in obj && !p.startsWith(prefix)),
        get: (obj, prop, receiver)=> prop in receiver ? obj[prop] : undefined
    })
}

const data = withHiddenParams( {
    planet: 'Pluto',
    name: 'Miraco',
    _ship: 'supersonic',
    age: 567,
    _enemy: false
})

//Optimization
const IndexedArray = new Proxy(Array, {
    construct(target, [args]) {
        let index = {}
        args.forEach(i => index[i.id] = i)

        return new Proxy(new target(...args), {
            get: (arr, prop) => {
                switch (prop) {

                    case 'push':
                        return item => {
                            arr[prop].call(arr, item)
                            index[item.id] = item
                        }
                    case 'findById':
                        return id => index[id]

                    default: return arr[prop]
                }
            }
        })
    }
})

const userData = new IndexedArray([
    {id: 1 , name: 'Lisa', age: 23},
    {id: 2 , name: 'Lola', age: 31},
    {id: 3 , name: 'Mike', age: 25},
    {id: 4 , name: 'Kony', age: 26},
])