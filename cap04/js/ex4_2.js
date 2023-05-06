// cria referência ao form e elemento onde será exibida a resposta
const frm = document.querySelector('form')
const resp =  document.querySelector('h3')

// 'ouvinte' de evento, acionado quando o botão submit for clicado
frm.addEventListener('submit', (e) => {
    e.preventDefault()  //evita o envio do form

frm.addEventListener('reset', () => {
    resp.innerText = '' // limpa o conteudo do h3 aonde é exibida a resposta
})
    const nome = frm.inNome.value
    const masculino = frm.inMasculino.checked
    const altura = frm.inAltura.value


    // let peso // declara a variavel peso

    // if(masculino) {  //se masculino(ou, if masculino == true)
    //     peso = 22 * Math.pow(altura, 2)  //Math.pow eleva ao quadrado
    // } else {
    //     peso = 21 * Math.pow(altura, 2 )
    // }


    // exemplo usando o operador ternario
    const peso = masculino ? 22 * Math.pow(altura, 2) : 21 * Math.pow(altura, 2)

    // apresenta a resposta (altera o conteúdo do elemento h3 da página)
    resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)} kg`
})