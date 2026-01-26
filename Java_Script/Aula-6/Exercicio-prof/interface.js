// PASSO 2. INTERFACE COM O USUÁRIO

function jogar() {
    
    const divResultado = document.getElementById('resultado');

    // Limpa o resultado anterior
    divResultado.className = "";
    divResultado.innerHTML = "Processando..."

    try {
        // 1. coleta os dados
        const qtdInput = Number(document.getElementById("qtd").value);
        const ladosInput = Number(document.getElementById("lados").value);

        // 2. camada de lógica
        // Se a função rolarDados disparar um throw, o código pula direto para o catch.
        const resultadoJogo = rolarDados(qtdInput, ladosInput);

        // 3. Sucesso! (só executa se não der erro acima)

        let htmlDados = "";
        if (resultadoJogo.dados.length <= 20) {
            htmlDados = resultadoJogo.dados
            .map(d => `<span class="dado-visual">${d}</span>`)
            .join(" ");
        }
        else {
            htmlDados = `<small>Muitos dados jogados (${resultadoJogo.dados.length})...</small>`
        }

        divResultado.classList.add("box-sucesso");
        divResultado.innerHTML = `
            <p>${htmlDados}</p>
            <h2>Total: ${resultadoJogo.total}</h2>
        `;

    }
    catch (erro) {
        // 4. tratamento dos erros 
        console.error("Erro capturado:", erro); // Log para o desenvolvedor

        divResultado.classList.add("box-erro");
        divResultado.innerHTML = `
            <strong>Ocorreu um erro:</strong><br/>
            ${erro.message}
        `;
    }
    finally {
        // Opcional: Código roda sempre independente de sucesso ou erro
        console.log("Tentativa de jogada finalizada!");
    }
}