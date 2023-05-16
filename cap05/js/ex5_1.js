const frm = document.querySelector('form') //obtém elementos da página
const resp = document.querySelector('pre')

frm.addEventListener('submit', (e) => { // 'escuta' evento submit do form
    e.preventDefault() //evita o envio do form

    const numero = Number(frm.inNumero.value) //obtém o número informado

    let resposta = '' // variavel do tipo string para concatenar a reposta

    //cria um laço de repetição (i começa e é incrementado até 10)
    for(i = 1; i <= 10; i++) {
        //a variavel resposta vai acumulando os novos conteudos (nos 2 formatos)
        resposta = resposta + numero + 'x' + i + '=' + (numero * i) + '\n' 
    }
    //o conteudo da tag pre é alterado para exibir a tabuada do número 
    resp.innerText = resposta

})