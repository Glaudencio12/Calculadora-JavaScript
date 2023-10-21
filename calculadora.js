function somar() {
    var n1 = document.getElementById("n1").value
    var n2 = document.getElementById("n2").value
    var resultado = document.getElementById("res")
    var soma = Number(n1) + Number(n2);
    resultado.innerHTML = `A soma de ${n1} + ${n2} = ${soma}`
}

function diminuir() {
    var n1 = document.getElementById("n1").value
    var n2 = document.getElementById("n2").value
    var resultado = document.getElementById("res")
    var diferenca = Number(n1) - Number(n2);
    resultado.innerHTML = `A subtração de ${n1} - ${n2} = ${diferenca}`
}

function multiplicar() {
    var n1 = document.getElementById("n1").value
    var n2 = document.getElementById("n2").value
    var resultado = document.getElementById("res")
    var produto = Number(n1) * Number(n2);
    resultado.innerHTML = `A multiplicação de ${n1} x ${n2} = ${produto}`
}

function dividir() {
    var n1 = document.getElementById("n1").value
    var n2 = document.getElementById("n2").value
    var resultado = document.getElementById("res")
    var quociente = Number(n1) / Number(n2);
    resultado.innerHTML = `A divisão de ${n1} ÷ ${n2} = ${quociente}`
}

