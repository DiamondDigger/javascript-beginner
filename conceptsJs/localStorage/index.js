const man = {
    name: 'Jack',
    age: 23
}


console.log(localStorage.getItem(man));
console.log(man)
localStorage.setItem('person', JSON.stringify(man))
console.log('from local storage without parsing',localStorage.getItem('person'));

const person = JSON.parse(localStorage.getItem('person'))
console.log('from local storage',person)
person.name = 'Vendor'
console.log(person)

// console.log('deleted from local storage',localStorage.removeItem('person'));

console.log(localStorage.getItem('person'))
console.log('clear local storage',localStorage.clear())

addEventListener('storage', event => {
    console.log(event)
})

// window.onstorage = () => {}