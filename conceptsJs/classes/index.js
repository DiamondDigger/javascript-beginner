const animal= {
    name: 'Animal',
    age: 4,
    hasTail: true
}
console.log(animal)

class Animal{
    static type = 'ANIMAL'

    constructor(options) {
        this.name = options.name
        this.age = options.age
        this.hasTail = options.hasTail
    }

    voice(){
        console.log('I am animal..Rrrr!!')
    }
}

const anotherAnimal = new Animal({
    name: 'Animal two',
    age: 23,
    hasTail: true
})

class Cat extends Animal{
    static type = 'CAT'

    constructor(options){
        super(options)
        this.color = options.color
    }

    voice() {
        super.voice()
        console.log('I am big angry cat!')
    }

    get ageInfo(){
        return this.age * 7
    }

    set ageInfo(newAge){
        this.age = newAge
        console.log(this.age)
    }
}

const cat = new Cat({
    name: 'Cat',
    age: 12,
    hasTail: true,
    color: 'black'
})