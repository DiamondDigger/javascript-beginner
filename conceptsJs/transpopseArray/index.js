const arr2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
]

console.log('1d')
arr2D.map((value, index) => {
    console.log(index, value)
})

console.log('2d')
arr2D.map((value, index) => arr2D.map((value1, index1) => {
    console.log(index, value1)
}))

console.log('2D')
const transposedArr = arr2D.map((value, index) => index < (arr2D[0].length)
    ? arr2D.map((value1, index1) => {
        console.log(value1)
        return value1 = value1[index]
    })
    : console.log('transpose is completed')
)

console.log(transposedArr.length)

let i = 0
for (let row of transposedArr) {
    ++i
    console.log(i, row)
}