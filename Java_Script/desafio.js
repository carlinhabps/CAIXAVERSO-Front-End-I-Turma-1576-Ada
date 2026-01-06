function calcularMedia() {
  let nomeAluno = document.getElementById("nome").value;

  let n1 = parseFloat(document.getElementById("nota1").value);

  let n2 = parseFloat(document.getElementById("nota2").value);

  const media = (n1 * 4 + n2 * 6) / 10;

  document.getElementById(
    "resultado"
  ).textContent = `Olá ${nomeAluno}, sua média é ${media.toFixed(2)}!`;
}


