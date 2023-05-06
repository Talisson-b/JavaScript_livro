// Elabora um programa para uma lan house de um aeroportpo - O programa deve ler o valor de cada 15 minutos de uso de um computador e o tempo de uso por um cliente em minutos. Informe o valor a ser pago pelo cliente,sabendo que as frações extras de 15 minutos devem ser cobradas de forma integral

// cria referência ao form e ao h3(aonde será exibida a resposta)
const frm = document.querySelector('form')
const resp = document.querySelector('h3')

// cria um 'ouvinte' de evento, acionado quando o botão submit for clicado
frm.addEventListener('submit', (e) => {
    // obtendp valores dos campos 
    const valor = Number(frm.inValor.value)
    const usoCliente = Number(frm.inTempo.value)

    const valorPagarCada15Min = Math.ceil(usoCliente / 15)
    const valorPagar = (valorPagarCada15Min * valor)

    resp.innerText = `Valor a pagar R$:${valorPagar.toFixed(2)}`

    e.preventDefault()
})