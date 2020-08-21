const person = Object.create(
    {
        calculateBirthYear() {
            console.log('BirthYear is ', new Date().getFullYear() - this.age)
        }
    },
    {
        name: {
            value: 'Oleg',
            enumerable: true,
            writable: true,
            configurable: true
        },
        age: {
            value: 57
        },
        birthYear: {
            get() {
                return new Date().getFullYear() - this.age
            },
            set(value) {
                console.log('Birthday set in', value)
                document.body.style.backgroundImage =
                    'url(https://c.wallhere.com/photos/85/a9/1600x900_px_minimalism_NASA_Pluto_space-682126.jpg!d)'
            }
        }
    })

console.log(person)

person.name = 'Snake'
for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log('Key', key, person[key]);
    }
}