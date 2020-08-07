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
wannaSeeYourTeam ==='yes' ? accessTeamDetails() : console.log('Mission failed!')

function accessTeamDetails(){
    const secretPhrase = prompt('Enter your secret phrase, agent '
        + agent007.name + ' :')
    const permission = (secretPhrase === agent007.phrase)
    console.log('permission = '+ permission)

    showTheTeam(permission)
}

function showTheTeam(permission){
    if(permission){
        for (let agent of agents) {
            console.log(agent.status + ' : ')
            console.log(agent)
        }
    } else
        console.log('You have no rights, sorry!')
}



