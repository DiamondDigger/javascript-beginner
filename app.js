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




