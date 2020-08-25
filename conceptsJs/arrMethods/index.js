const data = [
    {name:'Jo', id: 11, role:'officer'},
    {name:'Kenny', id: 22, role:'officer'},
    {name:'Billy', id: 1, role:'prisoner', danger: false, term: 2},
    {name:'ken', id: 2, role:'prisoner', danger: true, term: 8},
    {name:'Jenny', id: 3, role:'prisoner', danger: false, term: 4}
]

data.forEach(person => console.log(person))

const countOfPeople = data.map(person => person)
console.log(countOfPeople)
const protocol = data.filter(person => person.role ==='prisoner')
console.log('protocol', protocol)

const amountOfYearsInJail = data.filter(person => person.role === 'prisoner').reduce((term, person) => {
    return term += person.term
}, 0)

console.log(amountOfYearsInJail)

const findDangerIntruder = data.find(person => person.danger)
console.log(findDangerIntruder)
const findIndexOfDangerIntruder = data.findIndex(person => person.danger)
console.log(findIndexOfDangerIntruder)