function promocao(){

    let descricao = document.getElementById("medicamento").value;
    let preco = parseFloat(document.getElementById("preco").value);
    
    let total = preco * 2;
    let desconto = total % 1;
    let totalPromo = total - desconto;
    
    document.getElementById("respDescricao").innerText ="Promoção de " + descricao;
    document.getElementById("respPreco").innerText = "Leve 2 por apenas R$: " + totalPromo.toFixed(2);
    }
    
    let botao = document.getElementById("botao");
    botao.addEventListener("click", promocao);