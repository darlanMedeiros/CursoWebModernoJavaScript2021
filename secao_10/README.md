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