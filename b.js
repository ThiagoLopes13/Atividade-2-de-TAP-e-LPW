function calcularValor() { 
    let inValor = document.getElementById("inValor") 
    let inTempo = document.getElementById("inTempo") 
    let outValor = document.getElementById("outValor")

    let valor = Number(inValor.value)
    let tempo = Number(inTempo.value)

    let calcular = Math.ceil(tempo / 15)
    let total = calcular * valor

    outValor.textContent = "Valor a Pagar R$: " + total
}
    let mostrar = document.getElementById("mostrar")
    mostrar.addEventListener("click", calcularValor)