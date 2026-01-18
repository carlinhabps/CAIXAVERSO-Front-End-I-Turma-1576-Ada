// passo 1. criar a lista vazia
const agenda = [];

const html = (select) => document.querySelector(select);

function salvarContato() {
  // passo 2. pegar valores do HTML
  const nome = html("#inputNome").value;
  const email = html("#inputEmail").value;

  if (nome === "" || email === "") {
    alert("Por favor preencha todos os campos!");
    return;
  }

  // passo 3. criar o molde do objeto

  const contato = {
    nome: nome,
    email: email,
    id: Date.now, // Gera um ID único (opcional, mas boa prática) - pra não substituir a informação salva anteriormente
  };

  // passo 4. adicionar o objeto ao array
  agenda.push(contato);
  console.log("Agenda Atualizada:", agenda);

  // passo 5. Limpar inputs e atualizar tela
  html("#inputNome").value = "";
  html("#inputEmail").value = "";

  renderizarAgenda();
}

function renderizarAgenda() {
  const lista = html("#lista-contatos");

  lista.innerHTML = ""; // Limpa o HTML para não duplicar os resultados

  // Loop para percorrer o array de objetos
  for (let i = 0; i < agenda.length; i++) {
    let p = agenda[i]; // 'p' é o objeto da vez

    lista.innerHTML += `
      <li>
        <strong>${p.nome}:</strong>
        <strong>${p.email}</strong>
      </li>
    `;
  }
}
