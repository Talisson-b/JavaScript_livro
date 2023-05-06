// cria referência ao form e elemento onde será exibida a resposta
const frm = document.querySelector('form')
const resp = document.querySelector('h3')

// 'ouvinte' de evento, acionado quando o botão submit for clicado
frm.addEventListener('submit', (e) => {
    e.preventDefault() //evita o envioo do form

    // obtém e converte o conteudo do campo inHorBrasil
    const horaBrasil = Number(frm.inHoraBrasil.value)
    let horaFranca = horaBrasil + 5 //calcula o horario na frança

    if(horaFranca > 24) {
        horaFranca = horaFranca - 24  //subtrai 24
    } //se passar das 24 horas na frança
    
    resp.innerText = `Hora na franca ${horaFranca.toFixed(2)}`
})