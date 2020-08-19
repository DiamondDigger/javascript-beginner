const domElement = document.getElementById('dom')

console.dir(domElement)
console.log(domElement)

console.log(domElement.innerHTML)
console.log(domElement.innerText)

setTimeout(() => {
    addStylesTo(domElement)
}, 2500)

function addStylesTo(node) {
    node.textContent = 'Welcome here. Lets try our Google Search Engine!'
    node.style.color = 'blue'
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'yellow'
    node.style.padding = '2rem'

}