/*A entrada para um clube de pesca custa R$:20.00 por pessoa e cada pessoa tem direito a levar um peixe. Peixes extras custam R$ 12.00
Elabore um progrma que leia o número de pessoas de uma familia que foram ao clube e o número de peixes obtidos na pesca. Informe o valor
a pagar. */


const prompt = require('prompt-sync')()
const pessoas = Number(prompt( 'Numero de pessoas:'))
const peixes = Number(prompt('Numero de peixes:'))

let pagar 

if(peixes < pessoas) {
    pagar = pessoas * 20
} else {
    pagar = (pessoas * 20) + ((peixes - pessoas) * 12)
}

console.log(`Pagar R$: ${pagar.toFixed(2)}`)