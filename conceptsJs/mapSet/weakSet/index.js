const users = [
    {name: 'Mike', id: 1},
    {name: 'Elza', id: 2},
    {name: 'Eva', id: 3},
    {name: 'John', id: 4}
]

const userJohn = users[3]
console.log('users.indexOf(userJohn): ', users.indexOf(userJohn))

console.log(userJohn === users[users.length - 1])

const weakSet = new WeakSet(users)
console.log(weakSet)
console.log('weakSet.has(users[0])', weakSet.has(users[0]))
console.log('weakSet.has(users[1])', weakSet.has(users[1]))
console.log('weakSet.has(users[2])', weakSet.has(users[2]))
console.log('weakSet.has(users[3])', weakSet.has(users[3]))
console.log('Spliced on object')
console.log(users.splice(0, 3), users);
console.log('weakSet.has(last object in arr): ', weakSet.has(userJohn))
console.log('weakSet.has(sliced object): ', weakSet.has(users[1]))
console.log('weakSet.has(sliced object): ', weakSet.has(users[2]))
console.log('weakSet.has(sliced object): ', weakSet.has(users[3]))
console.log('users.indexOf(userJohn): ', users.indexOf(userJohn))


console.log('weakSet: ', weakSet)
