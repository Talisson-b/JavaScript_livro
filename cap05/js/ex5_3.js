let num //declara a variavel num com let, pois ela pode ser alterada
        //e será acessada fora do bloco do...while
do {    //cria laço de repetição(faça...)
    num = Number(prompt('Número: ')) //lê um número
    if (num == 0 || isNaN(num)){ //se num = 0 ou é invalido
        alert('Digite um número válido...')
}

} while (num == 0 || isNaN(num))  //... enquanto num = 0 ou inválido
    let pares = `Pares entre 1 e ${num}: `   //string que irá conter a resposta
    for (let i = 2; i <= num; i = i + 2) {
        pares = pares + i + ','
    }

    alert(pares)