const person = Object.create({},{
    name: {
        value: 'Oleg',
        enumerable: true,
        writable: true
    },
    age: {
        value: 34
    }
})

console.log(person)

person.name = 'Snake'
for (let key in person){
    console.log('Key', key, person[key])
}