require ('./global')

console.log(MinhaApp.saudacao())
//Fizer o frezzer na função se torna imutável
MinhaApp.nome = 'Eita!'
console.log(MinhaApp.nome)