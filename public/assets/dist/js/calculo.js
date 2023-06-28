function atualizarPreco() {
    const Referencia = document.getElementById("Referencia").textContent;
    let quantidade = document.getElementById("number-qtd").value;
    if (Referencia == "Girassol") {
        let preco = 25 * quantidade;
        let precoAntigo = 30 * quantidade;
        let precoJuros = preco / 12;

        document.getElementById("preco-produto").textContent = preco.toFixed(2);
        document.getElementById("preco-juros").textContent = precoJuros.toFixed(2);
        document.getElementById("preco-antigo").textContent = precoAntigo.toFixed(2);
        document.getElementById("value-qtd-aqui").value = quantidade;
        // Atualizar o valor do campo "preco" no formulário
        document.getElementById("preco-produto-input").value = preco.toFixed(2);
    } else if (Referencia == "Azaleia") {
        let preco = 27 * quantidade;
        let precoAntigo = 30 * quantidade;
        let precoJuros = preco / 12;

        document.getElementById("value-qtd-aqui").value = quantidade;
        document.getElementById("preco-produto").textContent = preco.toFixed(2);
        document.getElementById("preco-juros").textContent = precoJuros.toFixed(2);
        document.getElementById("preco-antigo").textContent = precoAntigo.toFixed(2);
        // Atualizar o valor do campo "preco" no formulário
        document.getElementById("preco-produto-input").value = preco.toFixed(2);
    } else if (Referencia == "Rosa") {
        let preco = 30 * quantidade;
        let precoAntigo = 60 * quantidade;
        let precoJuros = preco / 12;

        document.getElementById("value-qtd-aqui").value = quantidade;
        document.getElementById("preco-produto").textContent = preco.toFixed(2);
        document.getElementById("preco-juros").textContent = precoJuros.toFixed(2);
        document.getElementById("preco-antigo").textContent = precoAntigo.toFixed(2);
        // Atualizar o valor do campo "preco" no formulário
        document.getElementById("preco-produto-input").value = preco.toFixed(2);
    } else if (Referencia == "Begônia" || Referencia == "Petúnias" || Referencia == "Violeta") {
        let preco = 25 * quantidade;
        let precoJuros = preco / 12;

        document.getElementById("preco-produto").textContent = preco.toFixed(2);
        document.getElementById("preco-juros").textContent = precoJuros.toFixed(2);
        document.getElementById("value-qtd-aqui").value = quantidade;
        // Atualizar o valor do campo "preco" no formulário
        document.getElementById("preco-produto-input").value = preco.toFixed(2);
    } else if (Referencia == "Cosmos" || Referencia == "Gérgebras") {
        let preco = 20 * quantidade;
        let precoJuros = preco / 12;

        document.getElementById("preco-produto").textContent = preco.toFixed(2);
        document.getElementById("preco-juros").textContent = precoJuros.toFixed(2);
        document.getElementById("value-qtd-aqui").value = quantidade;
        // Atualizar o valor do campo "preco" no formulário
        document.getElementById("preco-produto-input").value = preco.toFixed(2);
    } else if (Referencia == "Cravo-Rosa" || Referencia == "Tulipas") {
        let preco = 35 * quantidade;
        let precoJuros = preco / 12;

        document.getElementById("value-qtd-aqui").value = quantidade;
        document.getElementById("preco-produto").textContent = preco.toFixed(2);
        document.getElementById("preco-juros").textContent = precoJuros.toFixed(2);
        // Atualizar o valor do campo "preco" no formulário
        document.getElementById("preco-produto-input").value = preco.toFixed(2);
    } else if (Referencia == "Lírios") {
        let preco = 40 * quantidade;
        let precoJuros = preco / 12;

        document.getElementById("value-qtd-aqui").value = quantidade;
        document.getElementById("preco-produto").textContent = preco.toFixed(2);
        document.getElementById("preco-juros").textContent = precoJuros.toFixed(2);
        // Atualizar o valor do campo "preco" no formulário
        document.getElementById("preco-produto-input").value = preco.toFixed(2);
    } else if (Referencia == "Margarida") {
        let preco = 50 * quantidade;
        let precoJuros = preco / 12;

        document.getElementById("value-qtd-aqui").value = quantidade;
        document.getElementById("preco-produto").textContent = preco.toFixed(2);
        document.getElementById("preco-juros").textContent = precoJuros.toFixed(2);
        // Atualizar o valor do campo "preco" no formulário
        document.getElementById("preco-produto-input").value = preco.toFixed(2);
    }
    // na segunda unidade
    let desconto = 2
    if (quantidade >= 2 && Referencia == "Girassol") {
        let preco = 21 * quantidade;
        let precoAntigo = 30 * quantidade;
        let precoJuros = preco / 12;

        document.getElementById("value-qtd-aqui").value = quantidade;
        document.getElementById("preco-produto").textContent = preco.toFixed(2);
        document.getElementById("preco-juros").textContent = precoJuros.toFixed(2);
        document.getElementById("preco-antigo").textContent = precoAntigo.toFixed(2);
        // Atualizar o valor do campo "preco" no formulário
        document.getElementById("preco-produto-input").value = preco.toFixed(2);
    }



}