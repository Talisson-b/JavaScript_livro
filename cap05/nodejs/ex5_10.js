// Elaborar um programa para uma loja que leia o valor de uma conta e o número de vezes que um cliente deseja parcelar esse valor(em boletos ou carnê). Para facilitar o troco, o lojista deseja que as parcelas iniciais não tenhamcentavos, ou seja, centavos apenas na última parcela. Informe como resposta o valor de cada parcela, considerando essa situção
const prompt = require('prompt-sync')()
const valor = Number(prompt('Valor R$:')) // le o valor do carnê
const num = Number(prompt('Nº de parcelas: ')) //le o numero de parcelas
const valorParcela = Math.floor(valor / num)  // calcula valor sem decimais
const valorFinal = valorParcela + (valor % num) // calcula parcela final

for (let i = 1; i < num; i++) {
    console.log(`${i}ª parcela: R$ ${valorParcela.toFixed(2)}`)
}

console.log(`${num}ª parcela: R$ ${valorFinal.toFixed(2)}`)
