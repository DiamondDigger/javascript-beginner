let name = 'James'
const lastName = 'Bond'
var status = 'agent'
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
wannaSeeYourTeam ==='yes' ? showTeammates() : console.log('Mission failed!')

function showTeammates() {
    agents.forEach(t => {
        console.log('Agent ' + t.name + ' : ')
        console.log(t)
    });
}
