// cria referência ao form e elementos de resposta do programa
const frm = document.querySelector('form')
const resp1 = document.querySelector('h3')
const resp2 = document.querySelector('h4')

// cria um 'ouviunte' de evento, acioando quando o botão submit for clicado
frm.addEventListener('submit', (e) => {
    e.preventDefault() // evita o envio do form

// obtém valores do form
    const nome = frm.inNome.value
    const nota1 = Number(frm.inNota1.value)
    const nota2 = Number(frm.inNota2.value)

    // calcula a Média das notas
    const media = (nota1 + nota2) / 2 

    resp1.innerText = `Média das Notas ${media.toFixed(2)}`

    // cria as condições
    if(media > 7) {
        // altera o texto e estilo da cor do elemento resp2
        resp2.innerText = `Parabéns ${nome}! Você foi aprovado(a)`
        resp2.style.color = 'blue'
    } else if (media >= 4){
        resp2.innerText = `Atenção ${nome}. Você está em exame`
        resp2.style.color = 'green'
    } else {
        resp2.innerText = `OPS ${nome}... Você foi reprovado`
    }
})