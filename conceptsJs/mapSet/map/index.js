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
// map.clear()
console.log(map.size, map)

for (let val of map.values()) {
    console.log('val:', val)
}

for (let key of map.keys()) {
    console.log('key:', key)
}

for (let [key, val] of map) {
    console.log(`[key = ${key} , val = ${val}]`)
}

const arrayFromSpread = [...map]
console.log('arrayFromSpread ', arrayFromSpread)
const array = Array.from(map)
console.log('array ', array)
console.log(arrayFromSpread)
const mapObj = Object.fromEntries(map.entries())
console.log('mapObj', mapObj)


const users = [
    {name: 'Monica'},
    {name: 'Henry'},
    {name: 'Coulsen'}
]

const visits = new Map()

visits
    .set(users[0].name, new Date())
    .set(users[1].name, new Date(new Date * 1000))
    .set(users[2].name, new Date(new Date() * 3000))

console.log(visits)

function lastVisit(user){
    return visits.get(user)
}