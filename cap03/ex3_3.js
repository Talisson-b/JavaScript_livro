// Elaborar um programa para uma empresa que leia o sálario e o tempo que um funcionario trabalha na empresa. Sabendo que a cada 4 anos (quadrienio) o funcionario recebe um acrescimo de 1% no sálario, calcule e informe o número de quadrienios a que o funcionario tem direito e o salario final.

const prompt = require('prompt-sync')() //adiciona pacote para entrada de dados
const salario = Number(prompt('Salário: '))
const tempoEmpresa = Number(prompt('Qual seu tempo na empresa: '))

const quadrienio = Math.floor(tempoEmpresa / 4) 

const calculo = quadrienio * 0.01 * salario

const salarioNovo = calculo + salario 

console.log(`Salário: R$: ${salario.toFixed(2)}`)
console.log(`Tempo (anos): ${tempoEmpresa}`)
console.log(`Quadrienios: ${quadrienio}`)
console.log(`Salário Final R$: ${salarioNovo.toFixed(2)}`) 