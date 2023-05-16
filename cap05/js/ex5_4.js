
alert('Digite 0 para sair')

do {
    const num = Number(prompt('Número'))  //le o numero
    if (num == 0 || isNaN(num)) {
        const sair = confirm ('confirma a saida')
        if(sair) {
            break // sai da repetiçaõ
        } else {
            continue
        }
    } if(num % 2 == 0 ) {
        alert(`o dobro de ${num} e: ${num * 2}`)
    } else {
        alert(`o triplo de ${num} e: ${num * 3}`)
    }
} while (true)
    alert('bye...bye')