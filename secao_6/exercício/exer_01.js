/*
01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.
*/

function calcular( a, b ){
    console.log('interna')
    console.log(a+b)
    console.log(a-b)
    console.log(a*b)
    console.log(a/b)
}

calcular (2, 6)

function calcularOperacoes (operador1, operador2) {
    console.log("entrou")
    console.log(operador1+operador2, operador1-operador2, operador1*operador2, operador1/operador2);
}

calcularOperacoes(1, 2)
