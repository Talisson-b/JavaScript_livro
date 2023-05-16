// Digamos que o nuemro de chinchilas de uma fazenda triplica a cada ano, após o primeiro ano. Elabora um programa que leia o número inicial de chinchilas e anos e informe ano a ano o numero medio previsto de chinchilas da fazenda. O numero inicial de chinchulas deve ser maior ou igual a 2(um casal)

const prompt = require('prompt-sync')()
let num = Number(prompt('Numeros:'))
const ano = Number(prompt('Anos:'))
let contador = 2

// para resolução desse problema, minha solução foi fazer um for dentro do outro, no primeiro for ele apresenta a quantidade do primeiro ano, que se mantém o  mesmo informado pela entrada, em seguida outro for dentro dele aonde faz o for multiplicar a cada loop.
for(let i = 0; i < 1; i++) {
    console.log(`1ª: ${num} chinchilas`)

    for(let j = 1; j < ano; j++) {
        num = num*3
        console.log(`${contador}ª: ${num} chinchilas`)
        contador++
    }


}





