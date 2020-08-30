export const msg = 'Hello, I am in module.js '
const privateMsg = 'Private message from module.js'

export function sum(a,b){
    return a+b
}

export function log(){
    console.log(privateMsg)
}