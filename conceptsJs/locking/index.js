function createCalcFunction(n) {
    return function() {
        console.log(1000 * n)
    }
}

const calcFunction = createCalcFunction(34)
calcFunction()