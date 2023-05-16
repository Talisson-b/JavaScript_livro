const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e)=>{
    e.preventDefault()

    const num = Number(frm.inNumero.value)
    let estrelas = '' // variavel que irá concatenar as esrelas/traços

    for(let i = 1; i <= num; i++) { // cria laço de repetição de 1 até num
        if(i % 2 == 1) {
            estrelas = estrelas + '*'  // na posicao impar do i
        } else {
            estrelas = estrelas + '-' // na posição par
        }
    }
    resp.innerText = estrelas //exibe estrelas
})