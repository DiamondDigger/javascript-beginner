let person = {
    name: 'Max'
}

const arr = [person]

console.log(arr)
console.log('person: ', person)

const weakMap = new WeakMap()
weakMap.set(person, 'value of person object')
console.log('weakMap', weakMap)

person = null
console.log('Changed person to null')
console.log('weakMap has person :', weakMap.has(person))
console.log('weakMap.get(person): ', weakMap.get(person))
console.log('weakMap', weakMap)

let user1 = {name: 'Lilly'}
let user2 = {name: 'Lucky'}

weakMap.set(user1, 123)
weakMap.set(user2, 321)

weakMap.get(person)
weakMap.get(user1)
weakMap.get(user2)
console.log('\n' +
    '\n' + 'weakMap.get(person): ', weakMap.get(person),
    '\n' + 'weakMap.get(user1): ', weakMap.get(user1),
    '\n' + 'weakMap.get(user2): ', weakMap.get(user2))


console.log('weakMap after adding two users:', weakMap)
console.log(weakMap.delete(person))

const cache = new WeakMap()

function cacheUser(user) {

    if (!cache.has(user)) {
        cache.set(user, new Date().getTime())
    }
    return cache.get(user)
}

console.log(cacheUser(user1))
console.log(cacheUser(user2))

const map = new Map()
map.set(user1, 'user1')
console.log(map)
user1 = {animal: 'Horse'}
console.log(map)
// user1 = null
console.log(map )
console.log(map.get(user1))
console.log(map.has(user1))
map.set(user1, 'another user1')
for (let key of map.keys()){
    console.log('map.keys():', key)
}
for (let value of map.values()) {
    console.log('map.values():', value)
}
for (let [key, value] of map) {
    console.log([key,value])
}
