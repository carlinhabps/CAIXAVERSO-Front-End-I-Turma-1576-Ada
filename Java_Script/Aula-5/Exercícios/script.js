function calcularTabuada() {
  const numInserido = Number(document.querySelector("#numero").value);

  if (numInserido === null || numInserido === "" || isNaN(numInserido)) {
    alert("Erro! Digite um número válido!");
  } else {
    const tabuada = document.querySelector("#resultadoTabuada");

    tabuada.innerHTML = "";

    for (i = 1; i <= 10; i++) {
      const produto = numInserido * i;

      tabuada.innerHTML += `<li>${numInserido} X ${i} = ${produto}</li>`;
    }
  }
}

// ! .................................

function consultaConvidado() {
  let convidados = ["Ana", "Bia", "Carlos", "Daniel", "Edu"];

  const lista = document.querySelector("#saudacaoConvidado");

  lista.innerHTML = "";

  for (const item of convidados) {
    if (item === "Carlos") {
      lista.innerHTML += `<li><strong>Carlos é o penetra!</strong></li>`;
    } else {
      lista.innerHTML += `<li>Seja bem-vindo(a) ${item}, você é nosso(a) convidado(a) VIP!</li>`;
    }
  }
}
