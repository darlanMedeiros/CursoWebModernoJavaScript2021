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

```bash
//Armazenanado uma funcao em uma variavel

const imprimirSoma = function(a, b){
    console.log(a+ b)
}
```
