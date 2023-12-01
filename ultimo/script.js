try {
    // Solicita dois números ao usuário
    let numero1 = parseFloat(prompt("Informe o primeiro número:"));
    let numero2 = parseFloat(prompt("Informe o segundo número:"));

    // Verifica se os números são válidos
    if (isNaN(numero1) || isNaN(numero2)) {
        throw new Error("Por favor, informe números válidos.");
    }

    // Realiza uma operação matemática (divisão)
    let resultado = numero1 / numero2;

    // Verifica se o resultado é um número finito
    if (!isFinite(resultado)) {
        throw new Error("Não é possível dividir por zero.");
    }

    // Exibe o resultado
    console.log(`O resultado da divisão é: ${resultado}`);
} catch (error) {
    // Captura e trata a exceção
    console.error(`Erro: ${error.message}`);
} finally {
    // Executa independentemente de haver ou não exceção
    console.log("Execução finalizada.");
}
