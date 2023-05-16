const prompt = require('prompt-sync')()
const senhaBanco = 547020

for (let i = 0; i < 3; i++) {

    let senha = Number(prompt('Digite a senha:'))

    if(senha === senhaBanco){
        console.log('senha valida')
        return
    } else {
        console.log('senha incorreta')
    }
    
}

console.log('cartao bloqueado')