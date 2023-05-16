const frm = document.querySelector('form')
const resp = document.querySelector('h3')
const resp2 = document.querySelector('pre')
const resp3 = document.querySelector('#pre')
const resp4 = document.querySelector('#taxa')
const lista = []


frm.addEventListener('submit' , (e)=> {
    e.preventDefault()
    const produto = frm.inProduto.value
    const preco = Number(frm.inPreco.value)
    const quantidade = Number(frm.inQuantidade.value)
    const total = preco * quantidade
    lista.push({produto ,preco, quantidade, total})

    const itens = lista.reduce((acumulador, iten) =>
        acumulador + iten.produto + '---R$:' + iten.preco + '---QNT:' + iten.quantidade + ' total R$: '+ iten.total.toFixed(2) + '\n' + "-".repeat(60) + "\n", "")

    const subTotal = lista.reduce((acumulador, iten) => acumulador += iten.total, 0)

    let taxa = subTotal * 0.05 + subTotal

    console.log(itens)
    console.log(subTotal)
    
    resp2.innerText = itens
    resp3.innerText = `Total da compra em R$: ${subTotal.toFixed(2)} \n + 5% de taxas R$: ${taxa.toFixed(2)}`

    frm.inProduto.value = ''
    frm.inPreco.value = ''
    frm.inQuantidade.value = ''

    frm.inProduto.focus()
    
})