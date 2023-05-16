const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e)=> {
    e.preventDefault()
    const num = Number(frm.inNumero.value) //obtém numero informado
    let numDivisores = 0 //declara e inicializa contador
    for(let i = 1; i <= num; i++) { //percorre todos possiveis divisores de num
        if(num % i == 0) { // verifica se i (1,2,3...) é divisor de num
            numDivisores ++ // se é =, incrementa contador
        }
    }
    if(numDivisores == 2) { // se possui apenas 2 divisores, é primo
        resp.innerText = `${num} É primo`

    } else{
        resp.innerText = `${num} Não é primo`
    }
})