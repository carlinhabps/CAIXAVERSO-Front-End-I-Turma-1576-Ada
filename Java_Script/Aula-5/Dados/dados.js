function rolarDados() {
  const quant = Number(document.getElementById("quant").value);
  const lados = Number(document.getElementById("lados").value);
  const divResultado = document.getElementById("resultado");

  // limpa resultado anterior
  divResultado.innerHTML = "";

  let somaTotal = 0; //acumulador

  // LAÇO FOR CLÁSSICO
  // sabemos a quantidade exata de loops, então nesse caso é perfeito
  for (let i = 1; i <= quant; i++) {
    // lógica matemática do dado
    let sorteio = Math.floor(Math.random() * lados) + 1;

    // acumulo de pontos
    somaTotal += sorteio; // somaTotal = somaTotal + sorteio

    //mostra o dado jogado
    divResultado.innerHTML += `<span class="dado"> ${sorteio} </span>`;
  }

  //mostra o total no fim
  divResultado.innerHTML += `<h3>Total: ${somaTotal}</h3>`;
}
