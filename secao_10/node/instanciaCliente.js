const contadorA = require ('./instancia')
const contadorB = require ('./instancia')

const contadorC = require ('./instanciaNova')()
const contadorD = require ('./instanciaNova')()


contadorA.inc()
contadorA.inc()

console.log(contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log (contadorC.valor, contadorD.valor)