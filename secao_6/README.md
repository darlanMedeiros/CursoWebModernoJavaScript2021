[RETURN](https://github.com/darlanMedeiros/CursoWebModernoJavaScript2021)

# SECÃO 6 FUNÇÕES EM JAVASCRIPT 

### Função em JS é First-Class Object (Citezens)
### Higher-order function

#### Criar de forma literal
```javascript
function fun1(){}
```
#### Armazernar em uma variável
```javascript
const fun2 = function () { }
```
#### Armazenar em um array
```javascript
const array = [ function (a,b){return a + b}, fun1 , fun2]
    console.log(array[0](2,3))
```
#### Armazenar em um atributo de objeto
```javascript
const obj = {}
obj.falar = function (){return 'Opa'}
console.log(obj.falar())
```
#### Passar função como param
```javascript
function run (fun){
    fun()
}

run (function (){console.log('Executandl...')})
```
#### Uma função pode retornar/conter uma função
```javascript
function soma (a, b){
    return function (c){
        console.log(a + b +c)
    }
}
soma (2,3)(4)
const cincoMais = soma(2,3)
cincoMais(4)
```

#### Parametros variáveis

```javascript
function soma (){
    let soma = 0
    for( i in arguments){
        soma+= arguments[i]
    }
    return soma
}
console.log(soma())
console.log(soma(1))
console.log(soma(1.1,2.2, 3.3))
```

### Parametros Padrão

```javascript


```