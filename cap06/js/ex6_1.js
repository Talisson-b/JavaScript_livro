const frm = document.querySelector('form')
const respNome = document.querySelector('span')
const respLista = document.querySelector('pre')

const pacientes = []  // declara vetor global

frm.addEventListener('submit', (e)=>{
    e.preventDefault() // evita envio do form
    const nome = frm.inPaciente.value // obtém o nome do paciente
    pacientes.push(nome)  // adiciona o nome ao final do vetor
    let lista = ''    // string para concatenar pacientes
    // for 'tradicional' (inicia em 0, enquanto menor que tamanho do array)
    for(let i = 0; i < pacientes.length; i++) {
        lista += `${i + 1}. ${pacientes[i]} \n`
    }
        respLista.innerText = lista // exibe a lista de pacientes n página
        frm.inPaciente.value = '' // limpa o conteudo do campo do formulario
        frm.inPaciente.focus() // posiciona o cursor no campo
})

// adiciona um 'ouvinte' para o evento click no btUrgencia que está no form
frm.btUrgencia.addEventListener('click', ()=>{
    // verifica se as validações do form estção ok(no caso, pacientes is required)
    if(!frm.checkValidity()) {
        alert('Informe o nome do paciente a ser atendido em caráter de urgência')
        frm.inPaciente.focus() // posiciona o cursor no campo inPaciente
        return // retorna form 
    }
    const nome = frm.inPaciente.value // obtém o nome do paciente
    pacientes.unshift(nome) // adiciona paciente no inicio do vetor
    let lista = '' // string para concatenar pacientes
    //forEach aplicado sobre o array pacientes
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`))
    respLista.innerText = lista // exibe a lista de pacientes na pagina
    frm.inPaciente.value = '' // limpa conteudo do campo do formulario
    frm.inPaciente.focus() //posiciona o cursor no campo
})

frm.btAtender.addEventListener('click', () => {
    // se o tamanho do vetor = 0
    if(pacientes.length == 0) {
        alert('Não há pacientes na lista de espera')
        frm.inPaciente.focus()
        return
    }
    const atender = pacientes.shift() // remove do inicio da fila (e obtém nome)
    respNome.innerText = atender // exibe o nome do paciente em atendimento 
    let lista = ''
    pacientes.forEach((paciente,i) => (lista += `${i + 1}. ${paciente}\n`))
    respLista.innerText = lista // exibe a lista de pacientes na página
})