// Este código vai ser executado quando o botão for clicado
document.getElementById("calcular").addEventListener("click", function() {
    // Pegando os valores digitados pelo usuário
    const preco = parseFloat(document.getElementById("preco").value);
    const entrada = parseFloat(document.getElementById("entrada").value);
    const anos = parseInt(document.getElementById("anos").value);

    // Verificando se os valores são válidos
    if (isNaN(preco) || isNaN(entrada) || isNaN(anos) || preco <= 0 || entrada < 0 || anos <= 0) {
        alert("Por favor, insira valores válidos.");
        return; // Se os valores não forem válidos, o cálculo não é feito
    }

    // Calculando o valor do empréstimo
    const valorEmprestimo = preco - entrada;
    const taxaJuros = 0.05; // Supondo uma taxa de juros de 5% ao ano
    const numeroParcelas = anos * 12; // Convertendo anos para meses

    // Calculando o valor da parcela mensal
    const parcelaMensal = (valorEmprestimo * taxaJuros) / (1 - Math.pow(1 + taxaJuros, -numeroParcelas));

    // Exibindo o resultado
    const resultado = `O valor da sua parcela mensal é: €${parcelaMensal.toFixed(2)}`;
    document.getElementById("resultado").textContent = resultado;
});
