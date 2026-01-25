const usuario = {
  nome: "Carla Beatriz",
  saldo: 100000,
};

const transacoes = [];
transacoes.push({
  valor: usuario.saldo,
  descricao: "Saldo inicial",
  transacao: "Saldo",
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
  usuario.saldo = transacoes.reduce((total, movimentacao) => {
    if (
      movimentacao.transacao === "Depósito" ||
      movimentacao.transacao === "Saque"
    ) {
      return total - movimentacao.valor;
    } else {
      return total + movimentacao.valor;
    }
  }, 0);

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
    if (p.transacao === "Depósito" || p.transacao === "Saque") {
      corTransacao = "saida";
    } else {
      corTransacao = "entrada";
    }

    extrato.innerHTML += `
    <tr class="${corTransacao}">
      <td>${p.transacao}</td>
      <td>${dataFormatada}</td>
      <td>${descricaoFormatada}</td>
      <td>${valorFormatado}</td>
    </tr>
  `;
  }
}

function novaTransacao(botao) {
  let valorInformado = prompt("Informe o valor da transação");

  valorInformado = Number(valorInformado.replace(",", "."));

  if (isNaN(valorInformado)) {
    alert("Por favor, informe um valor numérico válido.");
    return novaTransacao();
  } else if (valorInformado < 0) {
    alert("Por favor, informe o valor SEM o sinal de menos!");
    return novaTransacao();
  }

  const descricaoInfromada = prompt(
    "Por favor, informe a descrição da transação:",
  );

  let tipoTransacao;

  if (botao === "deposito") {
    tipoTransacao = "Depósito";
  } else if (botao === "saque") {
    tipoTransacao = "Saque";
  } else if (botao === "pagamento") {
    tipoTransacao = "Boleto";
  }

  transacoes.push({
    valor: valorInformado,
    descricao: descricaoInfromada,
    transacao: tipoTransacao,
    data: new Date(),
    id: Date.now(),
  });

  atualizarSaldo();
  renderizarExtrato();
}
