const domElement = document.getElementById('dom')
const headingH2 = document.querySelector('h2')
const h2List = document.querySelectorAll('h2')
const anotherHeadingH2 = h2List[1]
const lastHeadingH2 = h2List[h2List.length -1]

console.dir(headingH2)
console.log(domElement)

console.log('domElement.innerHTML: ', domElement.innerHTML)
console.log('domElement.innerText: ', domElement.innerText)

console.log('domElement: ', domElement)
console.log('headingH2: ', headingH2)
console.log('nextHeadingH2: ', anotherHeadingH2)
console.log('querySelectorAll("h2"): ', h2List)

setTimeout(() => {
    addStylesTo(lastHeadingH2)
}, 2500)

setTimeout(() => {
    addStylesTo(anotherHeadingH2, 'Hmm..It`s looks like..', 'red', '3rem')
}, 5000)

setTimeout(() => {
    addStylesTo(headingH2, 'we`ve done it!!!', 'yellow', '2rem')
}, 7000)

function addStylesTo(node, text = 'this is best place for your ad!!', color = 'yellow', fontSize) {
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'black'
    node.style.padding = '1rem'
    node.style.fontSize = fontSize
}

headingH2.onclick = () => {
    if (headingH2.style.color === 'yellow') {
        headingH2.style.color = 'black';
        headingH2.style.backgroundColor = 'white';
    } else {
        headingH2.style.color = 'yellow'
        headingH2.style.backgroundColor = 'black'
    }
}

anotherHeadingH2.addEventListener('dblclick', () => {
    if (anotherHeadingH2.style.color === 'red') {
        anotherHeadingH2.style.color = 'black'
        anotherHeadingH2.style.backgroundColor = 'white'
    } else {
        anotherHeadingH2.style.color = 'red'
        anotherHeadingH2.style.backgroundColor = 'black'}
})

const text = lastHeadingH2.textContent
lastHeadingH2.onclick = () => {
    console.log('Text from last h2 : ', text)
    if (lastHeadingH2.style.color === 'yellow') {
        lastHeadingH2.style.color = 'black'
        lastHeadingH2.style.backgroundColor = 'white'
        lastHeadingH2.textContent = 'Only 10$ per day! Only for you and only today!'
    } else {
        lastHeadingH2.style.color = 'yellow'
        lastHeadingH2.style.backgroundColor = 'black'
        lastHeadingH2.textContent = text
        console.log('Text from last h2 after changing : ', lastHeadingH2.textContent)
    }
}