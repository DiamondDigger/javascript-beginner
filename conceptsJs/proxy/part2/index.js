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
