// // const zooRussia = [
// //     'Lion: 4',
// //     'bird: 34',
// //     'crocodile: 2',
// //     'snake: 3'
// // ]
// //
// // const zooEurope = [
// //     'Lion: 7',
// //     'bird: 25',
// //     'wolf: 10',
// //     'eagle: 15',
// //     'elephant: 2'
// // ]
// //
// // console.log('zoo in Russia:', zooRussia)
// // console.log('zoo in Europe:', zooEurope)
// //
// // console.log('zoo in Russia(...):', ...zooRussia)
// // console.log('zoo in Europe(...):', ...zooEurope)
// //
// //
// // const showAnimal = (array) => console.log(...array)
// // console.log('From function:')
// // showAnimal(zooEurope)
// //
// //
// // const allAnimals = [...zooRussia, ...zooEurope]
// // console.log('all animals: ', allAnimals)
// //
// const numbers = [1,3,5,63,733,0]
// //
// // const arr = [...numbers]
// // console.log(arr)
//
//
// const russianFauna = {
//     Lion: 4,
//     bird: 34,
//     crocodile: 2,
//     snake: 3
// }
//
//
// const europeFauna = {
//     Lion: 7,
//     bird: 25,
//     wolf: 10,
//     eagle: 15,
//     elephant: 2
// }
//
// console.log('Europe:',{...europeFauna})
// console.log('Russia:',{...russianFauna})
// console.log({...europeFauna,...russianFauna})
// console.log({...russianFauna,...europeFauna})
//
// console.log(Math.max(1,3,4,5,7,12))
// console.log(Math.max(...numbers))
//

const numbers = [1,2,4,5,6,7,19]

function sum (a,b, ...rest) {
    console.log('rest: ',rest)
    return a+b+rest.reduce((restSum,i)=> restSum += i
    ,0)
}

console.log(sum(2, 5));
console.log(sum(...numbers))

const nodes = document.querySelectorAll('div')
console.log('nodes of divs: ',nodes)

const arr = [...nodes]
console.log('Array.isArray nodes:',Array.isArray(nodes))
console.log('Array.isArray arr(after spread):',Array.isArray(arr))
console.log(arr)
arr.map((div)=> console.log('DIV: ',div))

const [a,b,...others] = numbers
console.log(a,b,others)

const person ={
    name: 'Kenny',
    role: 'officer',
    male: true,
    age: 45
}

const {name, role,...rest} = person
console.log(role, name , rest)