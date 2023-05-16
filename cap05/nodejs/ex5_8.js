// A copado mundo ocorre de 4 em 4 anos, desde 1930, exeto nos anos de 1942 e 1946(segunda guerra mundial). Construir um programa que reoita a leitura de numeros(anos) até ser digitado 0. Informe para cada ano se ele é ou não ano de copa do mundo.

const prompt = require('prompt-sync')()
console.log('Programa Anos de Copa Do Mundo. Digite 0 para sair')
console.log('---------------------------------------------------')

do {
    const ano = Number(prompt('Ano: '))
    if(ano == 0) {
        break // sai da repetição
    } else if (ano == 1942 || ano == 1946) {
        console.log(`Não houve Copa em ${ano} (Segunda Guerra Mundial)`)
    } else if (ano >= 1930 && ano % 4 == 2) {
        console.log(`Sim ${ano} é ano do Copa do Mundo`)
    } else {
        console.log(`Não... ${ano} não é ano de Copa do Mundo`)
    }
} while(true)

console.log('saindo')