const domElement = document.getElementById('dom')
const headingH2 = document.querySelector('h2')
const nextHeadingH2 = headingH2.nextElementSibling
const h2List = document.querySelectorAll('h2')

console.dir(domElement)
console.log(domElement)

console.log('domElement.innerHTML: ', domElement.innerHTML)
console.log('domElement.innerText: ', domElement.innerText)

console.log('querySelectorAll("h2"): ', h2List )
console.log('headingH2: ', headingH2)
console.log('nextHeadingH2: ', nextHeadingH2)

setTimeout(() => {
    addStylesTo(h2List[h2List.length-1])
}, 2500)

setTimeout(() => {
    addStylesTo(headingH2)
}, 5000)

function addStylesTo(node) {
    // node.textContent = 'Welcome here. Lets try our Google Search Engine!'
    node.style.color = 'blue'
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'yellow'
    node.style.padding = '2rem'
}