function mathOperations(a,b){
    return [
        a+b,
        undefined,
        a*b,
        a/b,
        undefined
    ]
}

const mathArray = mathOperations(42,10)
const [sum,, ...others] = mathArray
console.log(sum, others)

const [anotherSum, sub = 'Value is undefined!', ...anotherOthers] = mathArray
console.log(anotherSum, sub, anotherOthers)

