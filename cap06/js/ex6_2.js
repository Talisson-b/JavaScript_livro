const frm = document.querySelector('form')
const respErros = document.querySelector('#outErros')
const respChances = document.querySelector('#outChances')
const respDica = document.querySelector('#outDica')

const erros = [] // vetor de escopo global com números já apostados
const sorteado = Math.floor(Math.random() * 100) + 1 // num aleatorio entre 1 a 100 
const CHANCES = 6 // cosntante com o numero de chances

frm.addEventListener('submit', (e) => {
    e.preventDefault() // evita o envio do form 
    const numero = Number(frm.inNumero.value) //obtém o número digitado
    if(numero == sorteado) { //se acertou
        respDica.innerText = `Parábens!! Número sorteado ${sorteado}`
        frm.btSubmit.disable = true  // troca status do botão
        frm.btNovoo.className = 'exibe'
        
    } else {
        if(erros.includes(numero)) { // se número existe no vetor erros (já apostou)
            alert(`Você já apostou o número ${numero}. Tente outro...`)
        } else {
            erros.push(numero) // adiciona numero ao vetor
            const numErros = erros.length // obétem o tamanho do vetor 
            const numChances = CHANCES - numErros  // calcula o numero de chances
            //exibe o n de erros, conteudo do vetor e n de chances
            respErros.innerText = `${numErros} (${erros.join(',')})`
            respChances.innerText = numChances

            if(numChances == 0) {
                alert('Suas chances acabaram...')
                frm.btSubmit.disabled = true
                frm.btNovoo.classNome = 'exibe'
                respDica.innerText = `GAME OVER !! Número Sorteado: ${sorteado}`
            } else {
                // usa o operador ternario para mensagem da dica
                const dica = numero < sorteado ?'maior':'menor'
                respDica.innerText = `Dica: Tente um número ${dica} que ${numero}`
            }
        }      
    }
    frm.inNumero.value = '' // limpa o campo de entrada
    frm.inNumero.focus() // posiciona cursor neste campo
})

frm.btNovoo.addEventListener('click', ()=> {
    location.reload()  // recarega a pagina
})