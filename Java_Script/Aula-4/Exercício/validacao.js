function iniciarCadastro() {
  let nome = "";
  let idade = "";
  let textoErro = "";

  // validação 1: nome

  do {
    nome = prompt("Etapa 1: Digite o seu nome (mínimo de 3 letras)");

    // Verificações:
    // 1. !nome = Se cancelou a operação (null) ou string vazia
    // 2. length < 3 = Verifica se tem menos de 3 letras
    if (!nome || nome.length < 3) {
      textoErro = "Erro! O nome precisa ter ao menos 3 letras.";
      alert(textoErro);
    }
    // Repete enquanto o nome for inválido
  } while (!nome || nome.length < 3);

  do {
    idade = Number(
      prompt(
        `Olá ${nome}, agora digite a sua idade (apenas maiores de 18 anos)`,
      ),
    );

    if (!idade || idade < 18) {
      textoErro = "Erro! Idade inválida ou pessoa menor de 18 anos.";
      alert(textoErro);
    }
  } while (!idade || idade < 18);

  // chegou no sucesso
  const divResultado = document.getElementById("resultado");

  divResultado.style.display = "block";
  divResultado.innerHTML = `
  <h3 class="sucesso">Cadastro realizado!</h3>
  <p><strong>Nome:</strong> ${nome}</p>
  <p><strong>Idade:</strong> ${idade}</p>
`;
}
