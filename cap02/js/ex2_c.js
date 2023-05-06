// Um supermercado está em promoção - Para aumentar suas vendas no setor de higiene, cada etiqueta de produto deve exibir uma mensagem anunciando 50% de desconto (para um item) na compra de três unidades do produto. Elabora um programa que leia descrição e preço de um produto. Após apresente as mensagens indicando a promoção.

// cria referência ao form e ao h3 e h4 (aonde será exibida as respostas)
const frm = document.querySelector('form')
const resp1 = document.querySelector('h3')
const resp2 = document.querySelector('h4')

// cria um 'ouvinte' de evento, acionado quando o botao de submit for clicado
frm.addEventListener('submit', (e) => {
    const nomeProduto = frm.inProduto.value
    const precoItem = Number(frm.inPreco.value)

    const promocao = precoItem * 2
    const desconto = precoItem / 2

    const valorTotal = promocao + desconto

    resp1.innerText = `${nomeProduto} - Promoção Leve 3 por R$:${valorTotal.toFixed(2)}`

    resp2.innerText = `O 3º produto custa apenas R$: ${desconto.toFixed(2)}`

    precoItem.value.innerText = ''
    nomeProduto.value.innerText = ''

    e.preventDefault()
})