const prompt = require('prompt-sync')();

let nome = "João";

let nota1 = 8;
let nota2 = 7;
let nota3 = 9;

let media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
    console.log(nome + " foi aprovado!");
} else {
    console.log(nome + " foi reprovado!");
}

console.log("Média: " + media);