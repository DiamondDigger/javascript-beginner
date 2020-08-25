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
    gen(n = 5) {
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