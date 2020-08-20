function createCalcFunction(n) {
    return function () {
        console.log(1000 * n)
    }
}

const calcFunction = createCalcFunction(34)
calcFunction()

function createIncrementor(n) {
    return function (num) {
        return n + num
    }
}

const addOne = createIncrementor(1)
const addTen = createIncrementor(10)

console.log('1+19=', addOne(19))
console.log('1+0=',addOne(0))
console.log('10+34=',addTen(34))
console.log('10+(-2)=',addTen(-2))

function urlGenerator(domain){
    return function(url){
        console.log(`https://${url}.${domain}`)
    }
}

const comUrl = urlGenerator('com')
const ruUrl = urlGenerator('ru')

comUrl('amazon')
comUrl('facebook')

ruUrl('yandex')
ruUrl('yahoo')

ruUrl('amazon')

function logPerson(){
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = {name: 'Mike', age: 23, job: 'driver'}
const person2 = {name: 'Michal', age: 27, job: 'carpenter'}

function bind(context, fn){
    return function(...args){
        fn.apply(context, args)
    }
}

bind(person1, logPerson)()
bind(person2, logPerson)()