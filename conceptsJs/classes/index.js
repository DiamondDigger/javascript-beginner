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

class Component{
    constructor(selector){
        this.$el = document.querySelector(selector)
        if (!this.$el) {
            this.$el = document.createElement('div')
            this.$el.setAttribute('id', selector)
            if (document.querySelectorAll('div').length !== 0) {
                document.body.insertBefore(this.$el, document.querySelector('div'))
            } else {
                document.body.append(this.$el)
            }
        }
    }

    hide(){
        this.$el.style.display = 'none'
    }

    show(){
        this.$el.style.display = 'block'
    }
}

class Box extends Component{
    constructor(options){
        super(options.selector)
        this.$el.style.width = this.$el.style.height = options.size + 'px'
        this.$el.style.backgroundColor = options.color
    }
}

const box1 = new Box({
    selector: '#box1',
    size: 100,
    color: 'blue'
})
const box2 = new Box({
    selector: '#box2',
    size: 140,
    color: 'yellow'
})
const box3 = new Box({
    selector: '#box2',
    size: 200,
    color: 'red'
})