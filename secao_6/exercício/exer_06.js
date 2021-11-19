/*
06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/

function jurosComposto (capital, juros, tempo){
    return capital * (1 + (juros/100)) ** tempo
   // return  capital * (Math.pow(1+(juros/100), tempo))
}

console.log(jurosComposto(1000, 4, 2))


function jurosSimples (capital, juros, tempo){

    return  capital + (capital * (juros/100)* tempo)
}

console.log(jurosSimples(4500, 4, 10))

