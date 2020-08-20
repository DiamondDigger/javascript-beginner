const domElement = document.getElementById('dom')
const headingH2 = document.querySelector('h2')
const h2List = document.querySelectorAll('h2')
const anotherHeadingH2 = h2List[1]
const lastHeadingH2 = h2List[h2List.length - 1]

const link = headingH2.childNodes[0]

link.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('Click on link', event.target.getAttribute('href'))
    const url = event.target.getAttribute('href')
    window.location = url
})

setTimeout(() => {
    addStylesTo(lastHeadingH2)
}, 2500)

setTimeout(() => {
    addStylesTo(anotherHeadingH2, 'Hmm..It`s looks like..', 'red', '3rem')
}, 5000)

setTimeout(() => {
    addStylesTo(headingH2.childNodes[0], 'we`ve done it!!!', 'yellow', '2rem')
}, 7000)

function addStylesTo(node, text = 'this is best place for your ad!!', color = 'yellow', fontSize) {
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'black'
    node.style.padding = '1rem'
    node.style.fontSize = fontSize
    node.style.width = '100%'
    node.style.display = 'block'
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
        anotherHeadingH2.style.backgroundColor = 'black'
    }
})

let countOfStyleChangingInAd = 0
const textFromH2 = lastHeadingH2.textContent
let discount = 10
lastHeadingH2.onmouseover = () => {
    countOfStyleChangingInAd++
    if (countOfStyleChangingInAd !== 0 && countOfStyleChangingInAd % 5 === 0) {
        alert(`Ok, we can suggest you special offer only right now - ${discount}% discount!!!`)
        discount++
        if (discount > 50) {
            discount = 5
        }
    }
    if (lastHeadingH2.style.color === 'yellow') {
        lastHeadingH2.style.color = 'black'
        lastHeadingH2.style.backgroundColor = 'white'
        lastHeadingH2.textContent = 'Only 10$ per day! Only for you and only today!'
    }
}

lastHeadingH2.onmouseout = () => {
    lastHeadingH2.style.color = 'yellow'
    lastHeadingH2.style.backgroundColor = 'black'
    lastHeadingH2.textContent = textFromH2
}

headingH2.oncontextmenu = () => {
    alert('Really ?? Are you kidding me?!')
};