// cria referência ao form e ao elemento h3 (aonde será exibida a resposta)
const frm = document.querySelector('form')
const resp = document.querySelector('h3')

// cria um 'ouvinte' de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    // obtém os valores dos campos
    const quilo = Number(frm.inQuilo.value)
    
    const consumo = Number(frm.inConsumo.value)

    const valor = (quilo / 1000) * consumo // calcula o valor a ser pago

    resp.innerText = `Valor a pagar R$: ${valor.toFixed(2)}` // exibe a resposta
    e.preventDefault()
})