const pilotos = ['Vettel', 'Alonso','Raikkonen','Massa']

console.log(pilotos)

pilotos.pop() // remove ultimo elemento da lista
console.log(pilotos)

pilotos.push('Verstappen') // adiciona elemento lista

console.log(pilotos)

pilotos.shift()//remove o primeiro elemento 

console.log(pilotos)

pilotos.unshift('Hamilton') //adiciona no primeiro elemento 

console.log(pilotos)

//splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2,0,'Bottas','Massa')
console.log(pilotos)

//remover
pilotos.splice(3,1)
console.log(pilotos)

//cria um novo array a partir do indice 2
const algunsPilostos1 = pilotos.slice(2)
console.log(algunsPilostos1)

//cria um novo array a partir do indice 1 até indice 4. Obs indice 4 não entra.
const algunsPilostos2 = pilotos.slice(1,4)
console.log(algunsPilostos2)

