// ! Passo 1. Criando o MAP
const meuDicionario = new Map();

// ! Passo 2. popular com dados iniciais
meuDicionario.set("html", "Linguagem de marcação e hipertexto");
meuDicionario.set("css", "Estiliza a aparência");
meuDicionario.set("js", "Linguagem de programação para comportamento");
// ? .set ADICIONA ou ATUALIZA se já existir

console.log(meuDicionario);

function cadastrarDefinicao() {
  let chave = document.querySelector("#chaveNova").value.toLowerCase();
  let valor = document.querySelector("#valorNovo").value;

  if (chave && valor) {
    // ? .set ADICIONA ou ATUALIZA se já existir
    meuDicionario.set(chave, valor);

    alert(`Palavra ${chave} salva com sucesso!`);

    // ? Limpar os campos
    document.querySelector("#chaveNova").value = "";
    document.querySelector("#valorNovo").value = "";
  } else {
    alert(`Preencha a palavra e o significado!`);
  }
}

function pesquisarTermo() {
  let busca = document.querySelector("#termoBusca").value.toLowerCase();
  let box = document.querySelector("#resultadoDicionario");

  box.style.display = "block"; //!  altera o style no CSS

  // ! Passo 3. verificando se existe com o has()
  if (meuDicionario.has(busca)) {
    // ! Passo 4. se tiver eu recupero com o get()
    let definicao = meuDicionario.get(busca);

    box.innerHTML = `✅ <strong>${busca.toUpperCase()}</strong>:<br>${definicao}`;
    box.style.backgroundColor = "#ffeaa7";
  } else {
    box.innerHTML = `❌ A palavra "${busca}" não foi encontrada!`;
    box.style.backgroundColor = "#ff7675";
  }
}
