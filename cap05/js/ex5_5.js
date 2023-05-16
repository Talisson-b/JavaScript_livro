const frm = document.querySelector('form') // obtém os elementos da página
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')
const resp3 = document.querySelector('#outResp3')

let resposta = ''
let numContas = 0 //inicialza contador
let valTotal = 0  //acumulador (variaveis globais)

frm.addEventListener('submit', (e)=>{
    e.preventDefault() 

    const descricao = frm.inDescricao.value //obtém dados da conta
    const valor = Number(frm.inValor.value)

    numContas++  // adiciona valores ao contador acumulador
    valTotal = valTotal + valor
    resposta = resposta + descricao + ' - R$: ' + valor.toFixed(2) + '\n'

    resp1.innerText = `${resposta}----------------------------------`
    resp2.innerText = `${numContas} Contas(s) - Total R$: ${valTotal.toFixed(2)}`

    frm.inDescricao.value = '' //limpa os campos do form
    frm.inValor.value = ''
    frm.inDescricao.focus()  //posiciona no campo inDescricao do form
})
