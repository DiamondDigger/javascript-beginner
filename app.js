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
    phrase: 'come here'
}
agents.push(agent001)

const agent002 = {
    name: 'Mylen',
    lastName: 'Harper',
    status: 'assistant',
    nick: 'Ki',
    phrase: 'ti hua ni to'
}
agents.push(agent002)

const agent007 = {}
agent007.name = name
agent007.lastName = lastName
agent007.nick = 'Li'
agent007.phrase = phrase
agent007.status = 'undercover agent'
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
    const latitude = +randomIntBetweenTwo(90, -90).toFixed(3)
    const longitude = +randomIntBetweenTwo(180, 0).toFixed(3)
    let coordinates = {}

    coordinates.latitude = latitude
    coordinates.longitude = longitude
    console.log('coordinates:', coordinates);
    return coordinates
}

function randomIntBetweenTwo(max, min) {
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

const jackInfo = personDetails('Jack')
console.log(jackInfo())
console.log(jackInfo('Bean'))

jackInfo()
jackInfo('Mortal')

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

const text = '!esaelp ,tekcaj ruoy em eviG'
console.log(text.split('').reverse().join(''))

const personNick = 'Ki'
const personIndex = agents.findIndex(agent => agent.nick === personNick)
console.log(agents[personIndex].status + ' ' + agents[personIndex].name)

const agentWithId = agents.find(agent => agent.hasOwnProperty('id'))
console.log('Agent with id is - ',agentWithId)

const nameToUpperCase = array => {
    if (array.hasOwnProperty('name')) {
        array.name = array.name.toUpperCase()
        console.log('Successfully changed name!')
    } else {
        return -1
    }
}
const agentDetails = agents.map(nameToUpperCase)
console.log(agentDetails)
console.log(agents)