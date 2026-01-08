// * 1. Criando um array vazio
const notas = [];

// * 2. Preencher o array
notas.push(Number(prompt("Digite a primeira nota:")));
notas.push(Number(prompt("Digite a segunda nota:")));
notas.push(Number(prompt("Digite a terceira nota:")));

console.log(notas); // somente para debugar se está chegando corretamente

// * 3. Calculando a média das notas
const soma = notas[0] + notas[1] + notas[2];
const media = soma / notas.length; // Uso dinâamico do tamanho

// * 4. Exibindo no HTML
const resultado = document.querySelector("#resultado");

resultado.innerHTML = `
  <p>Notas registradas: ${notas.join(", ")}</p>

  <p>A média final é: <strong>${media.toFixed(2)}</strong></p>
`;
