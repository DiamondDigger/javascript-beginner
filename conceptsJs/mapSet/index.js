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