const frm = document.querySelector('form')
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')
const resp3 = document.querySelector('#outResp3')

frm.addEventListener('submit', (e)=>{
    e.preventDefault()

    const saque = Number(frm.inSaque.value)

    if(saque % 10 != 0) { // verifica se saque não é multiplo de 10
        alert('valor inválido para as notas disponiveis (10,20,100)')
        frm.inSaque.focus()
        return
    }

    const notaCem = Math.floor(saque / 100) //calcula as notas de cem
    let resto = saque % 100 // quantos sobra para pagar
    const notasCinquenta = Math.floor(resto / 50) //calcula notas de 50
    resto = resto % 50 // quanto ainda sobra
    const notaDez = Math.floor(resto / 10) //calcula notas de 10
    if(notaCem > 0) {
        resp1.innerText = `Notas de R$ 100: ${notaCem}`
    }

    if(notasCinquenta > 0) {
        resp2.innerText = `Notas de R$ 50: ${notasCinquenta}`
    }

    if(notaDez > 0) {
        resp3.innerText = `Notas de R$ 10: ${notaDez}`
    }


})