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

const maserati = {
    // country: 'Italy',
    year: 1987,
    engine: {
        type: 'V6',
        volume: '6.0 L'
    }
}

const {country, year, engine:
    { type:
        engineType = 'undefined',
        volume: capacityOfOneCylinder = 'unknown'} } = maserati

console.log('Maserati: ' ,country, year, engineType, capacityOfOneCylinder)

function carInfo({engine: specs, year: birthday = 'unknown', country: home = 'cant find country of customer'}){
    console.log(specs, birthday, home)
}

console.log('From function carInfo ____________________________ ')
carInfo(maserati)