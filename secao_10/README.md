[RETURN](https://github.com/darlanMedeiros/CursoWebModernoJavaScript2021)

# SECÃO 10 NODE.JS

[RETURN](https://github.com/darlanMedeiros/CursoWebModernoJavaScript2021)

#### Comando para instalar biblioteca lodash
```basch
>npm i lodash
```
#### Comando para instalar biblioteca nodemon global
```basch
npm i -g nodemon
```
#### Iniciar novo projeto npn
```basch
npm init -y
```
#### Instalar dependências de terceiros e salvar no JSON

```basch
npm i --save axios
```

### O node faz cache nos modules export para resolver isso ideal fazer uma funcão factory.
### No exmplo instancia.js mostra esse exemplo

```basch
//Forma com cache
//node faz cache

module.exports ={
    valor:1,
    inc(){
        this.valor ++
    }
}

//Forma sem cache
//Uma factory retorna um novo objeto

module.exports = () =>{
    return { 
        valor:1,
        inc(){
            this.valor++
        }
    }
}
// forma de utilizar o import
const contadorB = require ('./instancia')
const contadorC = require ('./instanciaNova')()

```

#### Como recuperar os modulos instalados externos na pasta node_modeles excluidas.
#### Utilizando o arquivo Funcionarios
##### ANTES
```JSON
{
  "name": "funcionarios",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "axios": "^0.24.0"
  }
}
```
##### DEPOIS
> Acresentado o nodemon start para monitorar o arquivo arquivo quando alterado
```JSON
{
  "name": "funcionario",
  "version": "1.0.0",
  "description": "",
  "main": "funcionario.js",
  "scripts": {
    "start": "nodemon",
    "dev": "nodemon",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "axios": "^0.24.0"
  }

```
#### Comando para recuperar reisntalar dependências dentro da pasta do Json
```basch
npm i
```
#### Comando para start o nodemon
```basch
npm start
```
#### No npm é possível executar qualquer código de scrip adicionando no JSCON
#### Exemplo
```basch
npm run devnp
```

> __dirname: significa está na raiz do projeto sem necessidada passar caminho relativo

#### Criar pequeno projeto, criar a pasta projeto executar os seguintes comando dentro dela.


```basch
npm init -y
npm i --save express@4.16.2 -E
```
>express@4.16.2 -E instala a versão exata

### Instalar nodemon apenas no projeto desenvolvimento usa seguite comando
### Colocar o arquivo script   "start": "nodemon",
### Mudar a diretorio do main para : "main": "src/servidor.js",

```bash
npm i --save-dev nodemon@1.14.11 -E
npm start
npm i --save body-parser@1.18.2 -E
```

### Instalar node schedule. Modulo de temporizador

```basch

```