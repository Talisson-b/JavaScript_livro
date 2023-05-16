// Elabora um programa para simular um parquimetro, o qual leia o valor de moedas depositado em um terminal de estacionamento rotativo. O programa deve informar o tempo de permanencia do veiculo no local e o troco se existir, Se o valor for inferior ao tempo minimo, exiba a menssagem: 'valor insuficiente. Considerar os valores 1,00 30min 1,75 60min, 3,00 120min maximo permitido 120min'
const prompt = require('prompt-sync')()
const valorInserido = Number(prompt('Valor inserido no parquimetro: '))

if(valorInserido >= 1.00 && valorInserido <= 1.74 ) {
        console.log('Tempo: 30min')
        if(valorInserido % 2 != 0) {
            let troco
            if(troco = valorInserido- 1.00 || valorInserido > 0  )
            console.log(`troco: ${troco.toFixed(2)}`)
        } 
} else if(valorInserido >= 1.75 && valorInserido <= 2.99  ) {
        console.log('Tempo: 60min')
        if(valorInserido % 2 != 0) {
            let troco
            if(troco = valorInserido - 1.75 || valorInserido > 0 ) 
            console.log(`troco: ${troco.toFixed(2)}`)
        } 
} else if(valorInserido >= 3.00){
        console.log('Tempo: 120min')
        if(valorInserido % 2 !==0 || valorInserido > 0 ) {
            let troco
            if(troco = valorInserido - 3.00) 
                console.log(`troco: ${troco.toFixed(2)}`)
        
    }
}