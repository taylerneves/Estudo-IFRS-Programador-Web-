const prompt = require('prompt-sync')();

let A = Number(prompt("Digite o primeiro número:"));
let B = Number(prompt("Me fale o segundo número"));

let soma = A + B;
let menos = A - B;
let vezes = A * B;
let divisao = A / B;

console.log("Soma dos dois é", soma );
console.log("A substração é ", menos);
console.log("A multiplicação é ", vezes)
console.log("A divisão dos dois é ", divisao);