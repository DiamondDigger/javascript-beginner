let name = 'James'
const lastName = 'Bond'
let status = 'agent'
let id = '00' + 7

alert('Hello, ' + status + ' ' + id + ' ' +
    name + ' ' + lastName
)
alert('Now you name is ' + (name = 'Call'))
const phrase = prompt('Enter your secret phrase: ')
console.log('Your nickname is ' + name + '\n' + 'Your secret phrase is : ' + phrase)

const agents = []
const agent001 = {
    name: 'Coulsen',
    lastName: 'Di',
    status: 'coordinator',
    nick: 'Dom',
    phrase: 'come here',
    budget: 1500
}
agents.push(agent001)

const agent002 = {
    name: 'Mylen',
    lastName: 'Harper',
    status: 'assistant',
    nick: 'Ki',
    phrase: 'ti hua ni to',
    budget: 2500
}
agents.push(agent002)

const agent007 = {}
agent007.name = name
agent007.lastName = lastName
agent007.nick = 'Li'
agent007.phrase = phrase
agent007.status = 'undercover agent'
agent007.budget = 5000
agents.push(agent007)

console.log('Initialization have been completed!')

const wannaSeeYourTeam = prompt('Show all teammates: ?')
wannaSeeYourTeam === 'y' ? accessTeamDetails() : console.log('Mission failed!')

function accessTeamDetails() {
    const secretPhrase = prompt('Enter your secret phrase, agent '
        + agent007.name + ' :')
    const permission = (secretPhrase === agent007.phrase)
    console.log('permission = ' + permission)
    showTheTeam(permission)

}

function showTheTeam(permission) {
    if (permission) {
        for (let agent of agents) {
            console.log(agent.status + ' : ')
            console.log(agent)
        }
    } else
        console.log('You have no rights, sorry!')
    return ' '
}

const randomInt = Math.random()
const teamMembers = agents.length

function identificationNumber(randomInt, teamMembers) {
    const result = Math.floor(randomInt * (teamMembers - 1) + 1)
    console.log(result);
    return result
}

agent007.id = identificationNumber(randomInt, teamMembers)
console.log('Identification id : ' + agent007.id)

const mission = {}
mission.coordinates = getCoordinates()
console.log('Your mission details: ', mission);

// random coordinates for map
function getCoordinates() {
    const latitude = +randomIntBetweenTwo(-90, 90).toFixed(3)
    const longitude = +randomIntBetweenTwo(0, 180).toFixed(3)
    let coordinates = {}

    coordinates.latitude = latitude
    coordinates.longitude = longitude
    console.log('coordinates:', coordinates);
    return coordinates
}

function randomIntBetweenTwo(min, max) {
    let randomInt = Math.random() * (max - min) + 1
    randomInt > max ? (randomInt = max - randomInt) : randomInt
    console.log('randomInt: ', randomInt);
    return randomInt
}


// adding Google maps
let map

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: mission.coordinates.latitude,
            lng: mission.coordinates.longitude
        },
        zoom: 8
    })
}

function hndlr(response) {
    for (var i = 0; i < response.items.length; i++) {
        var item = response.items[i];
        // in production code, item.htmlTitle should have the HTML entities escaped.
        document.getElementById("content").innerHTML += "<br>" + item.htmlTitle;
    }
}

// timeout for function
let count = 0
const timeout = setInterval(function () {
    console.log(`..${count++}`)
    if (count === agents.length+1) {
        clearInterval(timeout)
        console.log('Scanning is done!')
    }
}, 1000)

const currentDate = (msg) => {
    console.log(Date.now(), msg)
}

currentDate('somewhere on Earth')

const multAllNum = (...all) =>{
    let res = 1
    for (let num of all){
        res *= num
    }
    console.log(`The result is ${res}`)
}

multAllNum(1,2,3,4,5,6,7,8,9,10)

//default values
const defaultSumOfTwoNum = (a = 1, b = 4) => {
    return console.log(a + b)
}

defaultSumOfTwoNum()
defaultSumOfTwoNum(2,19)

const personDetails = (name) => {
    return function(surName) {
        console.log(`Your name is - ${name}, and let me see..Surname is ${surName}`)
    }
}

//locking
const jackInfo = personDetails('Jack')
console.log(jackInfo())
console.log(jackInfo('Bean'))

jackInfo()
jackInfo('Mortal')

// array methods
const resources = ['gold', 'wood']
console.log(resources)

resources.push('water')
console.log(resources)

resources.unshift('minerals')
console.log(resources)
resources.reverse()
console.log(resources)

const shiftItem = resources.shift()
console.log(resources, shiftItem)

const popItem = resources.pop()
console.log(resources,popItem)

// make text recursive
const text = '!esaelp ,tekcaj ruoy em eviG'
console.log(text.split('').reverse().join(''))

//array find, findIndex
const personNick = 'Ki'
const personIndex = agents.findIndex(agent => agent.nick === personNick)
console.log(agents[personIndex].status + ' ' + agents[personIndex].name)

const agentWithId = agents.find(agent => agent.hasOwnProperty('id'))
console.log('Agent with id is - ',agentWithId)

let nameToUpperCase = array => {
    let count = 3;
    for (let person of array) {
        console.log('array.length = ',array.length);
        count++
        if (person.hasOwnProperty('name')) {
            person.name = person.name.toUpperCase();
            console.log('Successfully changed name!', person.name);
        } else {
            return -15;
        }
    }
    return array
}
let agentDetails = nameToUpperCase(agents)
console.log('agentDetails : ',agentDetails)
console.log('agents : ',agents)

const secretNumbers = [randomIntBetweenTwo(1,5),
    randomIntBetweenTwo(1,7),randomIntBetweenTwo(1,9)]

const roundNum = (num) => (num * 10).toFixed(0)
const cipher = secretNumbers.map(num => roundNum(num))

console.log('base of cipher :  ', secretNumbers)
console.log('cipher is : ', cipher)
console.log(cipher.join('-'))

const getStringFromNum = array => {
    const changedArray = array.map(num => String.fromCharCode(num))
    for (let num of changedArray) {
            console.log('from getStringFromNum',num)
        }
        return changedArray
}

const password = cipher.map(num => String.fromCharCode(num))
console.log('password from cipher',password)

const changedCipher = cipher
    .map(num => num < 50 ? (num * 2) : num * 1)

console.log('changedCipher is : ',changedCipher);

const changedPas = getStringFromNum(changedCipher)
console.log('password from changed cipher : ', changedPas)

const arrayOfNum = [1,2,3,4,5,6,7,8,9,10]
console.log(arrayOfNum.filter(num => num > 5).map(num => num + 1))

const allMoney = agents.reduce((acc, person) => {
    acc += person.budget
    return acc
},0)

console.log('All money in operation: ', allMoney + ' $');

const bondMoney = agents.filter(agent => agent.name.toLowerCase() === 'call' || agent.name.toLowerCase() === 'mylen')
    .reduce((acc, agent)=> {
        acc += agent.budget
        return acc
    }, 0)

console.log('Money of active agents: ', bondMoney +' $')
