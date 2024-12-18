document.getElementById("calcular").addEventListener("click", function() {
    // Pegando os valores dos campos
    const preco = parseFloat(document.getElementById("preco").value);
    const entrada = parseFloat(document.getElementById("entrada").value);
    const anos = parseInt(document.getElementById("anos").value);

    // Verificando se os valores são válidos
    if (isNaN(preco) || isNaN(entrada) || isNaN(anos) || preco <= 0 || entrada < 0 || anos <= 0) {
        alert("Por favor, insira valores válidos.");
        return; // Se algum valor for inválido, não faz o cálculo
    }

    // Calculando o valor do empréstimo
    const valorEmprestimo = preco - entrada;
    const taxaJuros = 0.05; // Taxa de juros de 5% ao ano
    const numeroParcelas = anos * 12; // Convertendo os anos para meses

    // Calculando a parcela mensal
    const parcelaMensal = (valorEmprestimo * taxaJuros) / (1 - Math.pow(1 + taxaJuros, -numeroParcelas));

    // Exibindo o resultado
    const resultado = `O valor da sua parcela mensal é: €${parcelaMensal.toFixed(2)}`;
    document.getElementById("resultado").textContent = resultado;
});
