//isso é permitido
console.log(soma(3,4))

//function declaration

function soma (x,y){
    return x + y
}

//function expression

// Não é permitido, somente depois da chamada.
// console.log(sub(5, 3))
const sub = function (x,y){
    return x - y
}
console.log(sub(5, 3))
//named function expression

const mult = function mult (x,y){
    return x * y
}