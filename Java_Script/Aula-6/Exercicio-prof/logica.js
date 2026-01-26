// PARTE 1: LÓGICA DO NEGÓCIO

// função auxiliar
function gerarNumeroAleatorio(max) {
    return Math.floor(Math.random() * max) + 1;
}

// função principal
function rolarDados(quantidade, lados) {

    if (quantidade <= 0) {
        throw new Error("Você precisa jogar pelo menos um dado!");
    }

    if (lados < 2) {
        throw new Error("O dado precisa ter no mínimo dois lados!");
    }

    if (isNaN(quantidade) || isNaN(lados)) {
        throw new Error("Por favor, preencha os campos com números!");
    }

    if (quantidade > 100) {
        throw new Error("Calma lá! O limite são de 100 dados!");
    }

    // PROCESSAMENTO (Se passou pelas regras acima o código continua seguro)

    let somaTotal = 0;
    const listaResultados = [];

    for (let i = 0; i < quantidade ; i++) {
        const valor = gerarNumeroAleatorio(lados);

        listaResultados.push(valor);
        somaTotal += valor; // Acumulador
    }

    return {
        total: somaTotal,
        dados: listaResultados
    }
}