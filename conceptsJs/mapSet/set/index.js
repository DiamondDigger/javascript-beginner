const setOfNums = new Set([1,1,2,3,4,5,5,5,5,3,])

console.log(setOfNums)

setOfNums
    .add(3)
    .add(6)
    .add(10)
console.log('Set size: ', setOfNums.size)
console.log('Set has 1 :',setOfNums.has(1))
console.log('Set has 15 :',setOfNums.has(15))
console.log('Delete 10 :',setOfNums.delete(10))
console.log('Set has 10 after deleting : ',setOfNums.has(10))
console.log(setOfNums)
console.log('Set size: ',setOfNums.size)
console.log('Set keys:', setOfNums.keys())
console.log('Set values:', setOfNums.values())

for (let el of setOfNums) {
    console.log(el)
}
console.log('Set entries: ',setOfNums.entries())
