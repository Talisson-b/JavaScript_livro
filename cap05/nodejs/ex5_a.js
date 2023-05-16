// Elabora um programa que leia o nome de uma fruta e um número. O programa deve repetir a exibição do nome da fruta, de acordo com o numero informado.  Utilize o '*' para separar os nomes. 
const prompt = require('prompt-sync')()
const nomeFruta = prompt('Fruta: ')
const numero = Number(prompt('Número: '))
let resp = ''

for(let i = 2; i <= numero; i++) {
        resp = resp + nomeFruta.padEnd(4,'*')
    
}
resp = resp + nomeFruta + '.'

console.log(resp)