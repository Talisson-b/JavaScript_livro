/*Uma farmacia necessita de um programa que leia o total de uma compra. Exiba como resposta o nº maximo de vezes que o cliente pode parcelar essa compra e o valor de cada parcel. Considere as seguintes condições: a) cada parcela deve ser de, no minimo de R$20.00 b) o número maximo de parcelas permitido é 6 */
const prompt = require('prompt-sync')()
const valor = Number(prompt('Valor da compra R$: '))
const aux  = Math.floor(valor / 20) //aux = nº de parcelas sem condições
const parcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux
const valorParcela = valor / parcelas
console.log(`Pode pagar em ${parcelas}x de R$:${valorParcela.toFixed(2)}`)