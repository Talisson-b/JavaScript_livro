/* ELaborar uma programa para uma vetérianaria, que leia o peso de uma ração em KG e o quando um gato consome por dia da ração, em gramas. Informe quantos dias irá durar a ração e o quanto sobra da ração (em gramas).
exemplo de como irá ficar o programa
Peso da ração (kg): 2
Consumo diário (gr): 300 
Duração: 6 dias
Sobra: 200gr */

const prompt = require('prompt-sync')() //adiciona pacote para entradas de dados
const racao = Number(prompt('Peso da Ração (kg): '))
const consumo = Number(prompt('Consumo diário (gr):'))

const racaoEmGramas = racao * 1000

const consumoDias = Math.floor(racaoEmGramas / consumo) 
const sobraEmGramas = racaoEmGramas % consumo

console.log(`Peso da Ração (kg): ${racao}`)
console.log(`Consumo Diário (gr): ${consumo}`)
console.log(`Duração: ${consumoDias}Dias`)
console.log(`Sobra: ${sobraEmGramas}gr`)
