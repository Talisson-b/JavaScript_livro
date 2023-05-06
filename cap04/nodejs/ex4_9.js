// Elaborar um programa que leia um numero - que deve ser uma centena. Calcule e exiba a centena invertida. Caso onumero seja uma centena, exiba mensagem
const prompt = require('prompt-sync')()
const numero = Number(prompt('Numero (centena):'))

if(numero < 100 || numero >= 1000) {
    console.log('ERRO... deve ser uma centena')
    return
}

const num1 = Math.floor(numero / 100) // obtém o 1º numero
const sobra = numero % 100 // oque sobra (dezena)
const num2 = Math.floor(sobra / 10) // obtém o 2º numero
const num3 = sobra % 10 //obtém o 3º numero

console.log(`Invertido: ${num3}${num2}${num1}`) //exibe o numero invertido