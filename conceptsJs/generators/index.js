function* strGenerator() {
    yield 'M'
    yield 'i'
    yield 'r'
    yield 'a'
    yield 'c'
    yield 'l'
}

const str = strGenerator()

function* numGen(n = 5) {
    for (let i = 0; i < n; i++) {
        yield i
    }
}

const num = numGen(2)

const iterator = {
    [Symbol.iterator](n = 51) {
        let i = 0
        return {
            next() {
                if (i < n) {
                    return { value: i++, done: false}
                } else{
                    return {value: undefined, done: true}
                }
            }
        }
    }
}

function* iter(n = 10){
    for (let i = 0; i < n; i++) {
        yield i
    }
}

for(let i of iter(15)){
    console.log(i)
}