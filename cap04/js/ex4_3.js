const bairro = prompt('Bairro de entrega: ')
let taxaEntrega

switch(bairro) {
    case 'centro':
        taxaEntrega = 5.00
        break
    case 'fragata':
    case 'tres vendas':
        taxaEntrega = 7.00
        break
    case 'laranjas':
        taxaEntrega = 10.00
        break
    default:
        taxaEntrega = 8.00
}

alert(`Taxa R$: ${taxaEntrega.toFixed(2)}`)