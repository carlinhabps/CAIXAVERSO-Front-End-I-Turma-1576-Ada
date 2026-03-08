// //  * Passo 1 - Entrada de dados

// let nome = prompt("Digite seu nome:");

// let entrada1 = prompt("Digite a primeira nota:");
// let entrada2 = prompt("Digite a segunda nota:");

// // * Passo 2 - Conversão de string para number

// let n1 = Number(entrada1);
// let n2 = Number(entrada2);

// // * Passo 3 - Cálculo

// const mediaFinal = (n1 + n2) / 2;

// // * Passo 4 - Saída visual

// // alert("A média do aluno é: " + mediaFinal);
// alert(`Olá ${nome}, sua média é ${mediaFinal}`);
// console.log("A média do aluno é:", mediaFinal);
// console.log(`Olá ${nome}, sua média é ${mediaFinal}`);

// ! EXERCÍCIO

let nomeAluno = prompt("Nome do Aluno");

let noota1 = Number(prompt("Digite a nota da primeira prova:"));

let noota2 = Number(prompt("Digite a nota da segunda prova:"));

const notaFinal = (noota1 * 4 + noota2 * 6) / 10;

alert(`Olá ${nomeAluno}, sua média do ano é ${notaFinal}`);
