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
transacoes.push({
  valor: 7000,
  descricao: "Pagamento 1",
  transacao: "debito",
  id: Date.now(),
});
transacoes.push({
  valor: 2000,
  descricao: "aluguel",
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
}
