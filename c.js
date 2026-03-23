function calcularPromocao() { 
    let inProduto = document.getElementById("inProduto") 
    let inPreco = document.getElementById("inPreco") 
    let outProduto = document.getElementById("outProduto") 
    let outPromocao = document.getElementById("outPromocao")

    let produto = inProduto.value
    let preco = Number(inPreco.value)

    let total = preco * 3
    let desconto = preco * 0.5
    let valorFinal = total - desconto
    let precoUltimo = preco - desconto

    outProduto.textContent = produto
    outPromocao.textContent = "Promoção: leve 3 por R$ " + valorFinal
    outUltimo.textContent = "O 3° produto custa apenas R$ " +precoUltimo
}

    let mostrar = document.getElementById("mostrar") 
    mostrar.addEventListener("click", calcularPromocao)