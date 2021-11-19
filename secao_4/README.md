[RETURN](https://github.com/darlanMedeiros/CursoWebModernoJavaScript2021)

# NOTAS DA SEÇÃO
- Executar o código JS 
- Comando direto no terminal node objeto.js
- Instalar o plugin code Runner no VS code
- Atralho para executar code Runner no VS code  ctrl+alt+n
- Objeto em JS é diferente de JSON;

#### Exemplo:
Objeto JSON
> '{"nome": "Camisa Polo", "preco" : 79.90}'

Objeto JS

```javaScript
const prod2 = {
    nome: 'Camisa',
    preco : 79.90 }
```
- JSON é um formato textual
- Objeto vai ter sempre chave valor

- Ter conhecimento de null e undefined
    -Null quando queremos fazer uma atribuição sem valor para a variável, ou que não temos endereço na memória. 
    -Ja o undefined não foi atribuido valor na variavel

- JavaScript a função é "basilar", tudo é basiado em função.
- Versatilidade do JavaScript é a possibilidade de armazenar uma função em uma variável.

```javascript
//Armazenanado uma funcao em uma variavel
const imprimirSoma = function(a, b){
    console.log(a+ b)
}
```

- Função arrow

```javascript
//Armazenanado uma funcao em uma variavel
const soma = (a,b) => {
     console.log(a+ b)
}
//Com retorno implicito
const subtracao = (a, b) => a-b
```
- Evitar de criar variável com escopo global
- Fuja do escopo global

- let tem escopo de bloco

```javascript
let numero =1
{
    let numero = 2
    console.log('dentro=' , numero)
}
console.log('fora=', numero)

```
### Neste exemplo acima a variável "let" vai ter dois valor mesmo estando dentro do mesmo escopo, já isso não acontece utilizando "var"

```javascript
var numero =1
{
    var numero = 2
    console.log('dentro=' , numero)
}
console.log('fora=', numero)

```
- Hoisting é uma possibilidade em javaScript, seria o içamento de uma variável declarada após sua chamada.

```javascript
console.log('a = ', a)
var a =2
console.log('a = ', a)

```
- O destructuring foi incluido em JS para estração de valores em objetos e arrays







[RETURN](https://github.com/darlanMedeiros/CursoWebModernoJavaScript2021)