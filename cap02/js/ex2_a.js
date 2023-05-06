// exercicio A
// Uma farmácia está em promoção - Na compra de duas unidades de um mesmo medicamento, o cliente recebe como desconto os centavos do valor total. Elaborar um programa que leia a descrição e preço de um medicamento . Informe o valor do produto na promoção



// cria refêrencia ao form e ao h3 e h4 (onde será exibida o resultado)
const frm = document.querySelector('form')
const titulo = document.querySelector('h3')
const resp = document.querySelector('h4')

// cria um 'ouvunte' de evento, acionado quando o botão submit for clicado
frm.addEventListener('submit', (e)=> {
    // obtendo valores dos campos
    const nomeMedicamento = frm.inMedicamento.value
    const preco = Number(frm.inPreco.value)

    const valor = Math.floor(preco) * 2 // calcula  valor de duas unidades



    titulo.innerText = `Promoção de: ${nomeMedicamento}`
    resp.innerText = `Leve 2 por apenas R$:${valor} Reais`

    e.preventDefault() //evita o envio do form


})