const obj = {
    name: 'Jo',
    age: 34,
    job: 'Fullstack'
}

console.log(Object.entries(obj))

const arr =[
    ['name', 'Jo'],
    ['age', 34],
    ['job', 'Fullstack']
]

console.log(Object.fromEntries(arr))

const map = new Map(arr)

console.log(map)
map.get('age')
map.get('name')
map.set(obj, 'Value of object')
console.log(map)
console.log('size:', map.size)
map.delete('name')
console.log(map.has('name'))
console.log(`size: ${map.size}`)
map.clear()
console.log(map.size, map)
