function adivinhar() {
  // passo 1. sortear número entre 1 e 20
  const numeroSecreto = Math.floor(Math.random() * 20) + 1;

  let tentativa = 0;
  let chute = 0;

  // passo 2. loop while (enquanto for diferente, repete)
  while (chute !== numeroSecreto) {
    // Pegando o chute do usuário
    let entrada = prompt("Adivinha o número (1 a 20) ou digite sair:");

    if (entrada === null || entrada.toLocaleLowerCase() === "sair") {
      alert("Jogo cancelado! O número era:", numeroSecreto);
    }

    chute = Number(entrada);
    tentativa++;

    if (chute == numeroSecreto) {
      alert(
        `Parabéns! Você acertou o número ${numeroSecreto} em ${tentativa} tentativas!`
      );
      (document.getElementById("mensagem").innerHTML =
        "Vitória! Último número:"),
        numeroSecreto;
    }
  }
}
