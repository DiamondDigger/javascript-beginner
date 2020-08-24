function* strGenerator(){
    yield 'M'
    yield 'i'
    yield 'r'
    yield 'a'
    yield 'c'
    yield 'l'
}

const str = strGenerator()

function* numGen(n = 5){
    for(let i = 0; i < n; i++){
        yield i
    }
}

const num = numGen(2)