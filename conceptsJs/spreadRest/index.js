// const zooRussia = [
//     'Lion: 4',
//     'bird: 34',
//     'crocodile: 2',
//     'snake: 3'
// ]
//
// const zooEurope = [
//     'Lion: 7',
//     'bird: 25',
//     'wolf: 10',
//     'eagle: 15',
//     'elephant: 2'
// ]
//
// console.log('zoo in Russia:', zooRussia)
// console.log('zoo in Europe:', zooEurope)
//
// console.log('zoo in Russia(...):', ...zooRussia)
// console.log('zoo in Europe(...):', ...zooEurope)
//
//
// const showAnimal = (array) => console.log(...array)
// console.log('From function:')
// showAnimal(zooEurope)
//
//
// const allAnimals = [...zooRussia, ...zooEurope]
// console.log('all animals: ', allAnimals)
//
// const numbers = [1,3,5,63,733,0]
//
// const arr = [...numbers]
// console.log(arr)


const russianFauna = {
    Lion: 4,
    bird: 34,
    crocodile: 2,
    snake: 3
}


const europeFauna = {
    Lion: 7,
    bird: 25,
    wolf: 10,
    eagle: 15,
    elephant: 2
}

console.log('Europe:',{...europeFauna})
console.log('Russia:',{...russianFauna})
console.log({...europeFauna,...russianFauna})
console.log({...russianFauna,...europeFauna})