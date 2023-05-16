// Elaborar um programa que leia três lados e verifique se eles podem ou não formar um triangulo. Para formar um triangulo, um dos lados não pode ser maior que a soma dos outros dois. Caso possam formar um triangulo, exiba tambem qual o tipo do triangulo: Equilatero(3 lados iguais), isoscels(2 lados iguais) e escaleno (3 lados diferentes)
const prompt = require('prompt-sync')()
const ladoA = Number(prompt('Lado A:'))
const ladoB = Number(prompt('Lado B:'))
const ladoC = Number(prompt('Lado C:'))

if (ladoA == ladoB && ladoA == ladoC && ladoB == ladoC) {
    console.log('Lados podem formar um triangulo')
    console.log('Tipo: Equilatero')
} else if (ladoA == ladoB || ladoB == ladoC || ladoC == ladoA) {
    console.log('Lados podem formar um triangulo')
    console.log('Tipo: isosceles')
} else if(ladoA != ladoB && ladoC && (ladoA + ladoB || ladoC) <= ladoA && ladoB && ladoC) {
    console.log('triangulo escaleno')
} else {
    console.log('um dos lados e maior que a soma dos outros dois lados, impossivel formar um triangulo')
}
