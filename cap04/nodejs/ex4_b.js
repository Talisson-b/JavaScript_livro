// Elabora um programa que leia a velocidade permitida em uma estrada e a velocidade de um condutor. Se a velocidade for inferior ou igual a permitida, exiba 'SEM MULTA'.  Se a velocidade for de até 20% maior que a permitida, exiba 'MULTA LEVE', se a velocidade for superior a 20% da velocidade permitida, exiba 'MULTA GRAVE'
const prompt = require('prompt-sync')()
const velocidadePermitida = Number(prompt('velocidade permitida: '))
const velocidadeDoCondutor = Number(prompt('velocidade do condutor: '))

// // if (velocidadeDoCondutor < velocidadePermitida) {
// //     console.log('SEM MULTA !!')
// // } else if (velocidadeDoCondutor <= velocidadePermitida + (velocidadePermitida* 0.2)) {
// //     console.log('MULTA LEVE')
// // } else {
// //     console.log('MULTA GRAVE')
// }

const velocidade = velocidadeDoCondutor < velocidadePermitida ? console.log('SEM MULTA') : velocidadeDoCondutor <= velocidadePermitida + (velocidadePermitida* 0.2 )? console.log('MULTA LEVE') : console.log('MULTA GRAVE')