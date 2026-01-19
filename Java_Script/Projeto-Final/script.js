const usuario = {
  nome: "Carla Beatriz",
  saldo: 10000,
};

const transacoes = [];
transacoes.push({
  valor: 10000,
  descricao: "Saldo inicial",
  transacao: "credito",
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
  usuario.saldo = transacoes.reduce((total, valor) => {
    if (valor.transacao === "credito") {
      return total + valor.valor;
    } else {
      return total - valor.valor;
    }
  }, 0);

  console.log(usuario.saldo);

  html("#saldo").innerHTML = usuario.saldo.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
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
    "Por favor, informe a descrição da transação:"
  );

  let tipoTransacao;

  if (botao === "deposito") {
    tipoTransacao = "credito";
  } else if (botao === "pagamento") {
    tipoTransacao = "debito";
  }

  transacoes.push({
    valor: valorInformado,
    descricao: descricaoInfromada,
    transacao: tipoTransacao,
    id: Date.now(),
  });

  atualizarSaldo();
}
