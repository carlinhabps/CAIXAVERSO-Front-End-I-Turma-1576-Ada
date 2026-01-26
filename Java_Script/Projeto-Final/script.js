const usuario = {
  nome: "Carla Beatriz",
  saldo: 1000,
};

const transacoes = [];
transacoes.push({
  valor: usuario.saldo,
  descricao: "Saldo inicial",
  transacao: "C",
  data: new Date(),
  id: Date.now(),
});

console.log(transacoes);

const html = (selector) => document.querySelector(selector);

html("#nome-usuario").innerHTML = usuario.nome;
html("#saldo").innerHTML = usuario.saldo.toLocaleString("pt-br", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function atualizarSaldo() {
  let creditos = 0;
  let debitos = 0;

  for (let i = 0; i < transacoes.length; i++) {
    if (transacoes[i].transacao === "C") {
      creditos += transacoes[i].valor;
    } else {
      debitos += transacoes[i].valor;
    }
  }

  if (debitos > creditos) {
    throw new Error("Saldo insuficiente para realizar a transação");
  }

  usuario.saldo = creditos - debitos;

  console.log(usuario.saldo);

  html("#saldo").innerHTML = usuario.saldo.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function renderizarExtrato() {
  const extrato = html("#lista-transacoes");
  extrato.innerHTML = "";

  for (let i = 0; i < transacoes.length; i++) {
    const p = transacoes[i];

    const dataFormatada = p.data.toLocaleDateString("pt-BR");
    const descricaoFormatada = p.descricao.toUpperCase();
    const valorFormatado = p.valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    let corTransacao;
    if (p.transacao === "C") {
      corTransacao = "entrada";
    } else {
      corTransacao = "saida";
    }

    extrato.innerHTML += `
    <tr class="${corTransacao}">
      <td>${dataFormatada}</td>
      <td>${descricaoFormatada}</td>
      <td>${valorFormatado}</td>
      <td>${p.transacao}</td>
    </tr>
  `;
  }
}

function novaTransacao(botao) {
  try {
    let valorInformado = prompt("Informe o valor da transação");

    valorInformado = Number(valorInformado.replace(",", "."));

    if (isNaN(valorInformado)) {
      alert("Por favor, informe um valor numérico válido.");
      return novaTransacao(botao);
    } else if (valorInformado < 0) {
      alert("Por favor, informe o valor SEM o sinal de menos!");
      return novaTransacao(botao);
    }

    let descricaoInfromada = prompt(
      "Por favor, informe a descrição da transação:",
    );
    if (!descricaoInfromada) {
      descricaoInfromada = botao;
    }

    let tipoMovimentacao;
    if (botao === "deposito") {
      tipoMovimentacao = "C";
    } else if (botao === "saque") {
      tipoMovimentacao = "D";
    } else if (botao === "pagamento") {
      tipoMovimentacao = "D";
    }

    transacoes.push({
      valor: valorInformado,
      descricao: descricaoInfromada,
      transacao: tipoMovimentacao,
      data: new Date(),
      id: Date.now(),
    });

    atualizarSaldo();
    renderizarExtrato();
  } catch (erro) {
    console.error("Erro capturado:", erro);

    html("#lista-transacoes").innerHTML += `
    <tr class="erro">
      <td colspan = 5 >${erro.message}</td>
    </tr>
  `;
  }
}
