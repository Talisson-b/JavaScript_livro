// Elaborar um programa que leia um número e verifique se ele perfeito ou não perfeito. Um número dito perfeito é aquele que é igual à soma dos seus divisores inteiros(exceto o proprio numero). O programa deve exibir os divisores do número e a soma deles. 

const prompt = require('prompt-sync')()
let numero = parseInt(prompt("Digite um número inteiro positivo:"));
let somaDivisores = 0;
let divisores = [];

for (let i = 1; i < numero; i++) {
  if (numero % i === 0) {
    somaDivisores += i;
    divisores.push(i);
  }
}

if (somaDivisores === numero) {
  console.log(numero + " é um número perfeito.");
} else {
  console.log(numero + " não é um número perfeito.");
}

console.log("Divisores: " + divisores.join(", "));
console.log("Soma dos divisores: " + somaDivisores);

