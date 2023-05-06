// Elaborar um programa que leia um numero. Informe se ele é par ou Ímpar. Faça com o if...else...tradicional e, apos, tente criar a condição com operador ternario.

const prompt = require ('prompt-sync')() //adiciona pacote de dados
const num = Number(prompt('Numero:')) // entrada de dados

const imparOuPar = num % 2== 0 ? 'par' : 'impar' //operador ternario ainde verifica se o resto do numero digitado é zero, caso seja o numero é par senão é impar


console.log(`${num} é: ${imparOuPar}`)

// if((num % 2 )== 0) {
//     console.log(`${num} é par`)
// } else {
//     console.log(`${num} é impar`)
// }


