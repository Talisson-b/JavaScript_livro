const frm = document.querySelector('form')
const resp = document.querySelector('#itensNovos')
const remov = document.querySelector('#itensRemovidos')
const lista = []  // declara um vetor global

let contador = 0


frm.addEventListener('submit', (e) => {
    e.preventDefault()
    const item = frm.inProduto.value // obtém o nome do item
    lista.push(item)
    let fila = ''
    //for tradicionar (inicia em 0, enquanto menor que tamnho do array)
    for(let i = 0; i < lista.length; i++) {
        fila += `${i + 1}. ${lista[i]} \n`
    }
    
    resp.innerText = fila // exibe a lista de pacientes n página
    frm.inProduto.value = ''
    frm.inProduto.focus()
    })

    // função para remover o primeiro item da lista
    frm.btRemover.addEventListener('click', ()=> {
        if(lista.length == 0 ) {
            alert('não há itens na lista para ser removidos')
            frm.inProduto.focus()
        return
        }

        let removido = '' // declarando variavel para concatenar os itens removidos
        contador++
        removido = lista.shift() // removendo o primeiro item da lista e obetendo o seu valor a variavel removido
        remov.innerText += `${contador}. ${removido}\n` // exibindo a lista de itens removidos

        // iterando a lista para apresentar a lista com itens removidos 
        let fila =''
        lista.forEach((itens, i)=>(fila += `${i + 1}. ${itens}\n `))
        resp.innerText = fila
    })