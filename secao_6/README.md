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
//Estrategia 1 para gerar valor padrão
//Muito utilizado em javaScript

function soma1 (a,b,c){
    a=a || 1
    b=b || 1
    c=c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1,2,3), soma1(0,0,0))

//Estrategia 2,3 e 4 para gerar valor padrão

function soma2(a,b,c){
    a=a !== undefined ? a : 1
    b=1 in arguments ? b : 1
    c= isNaN(c)? 1 :c
    return a+b+c
}

console.log(soma2(), soma2(3), soma2(1,2,3), soma2(0,0,0))

//valor padrão do es2015

function soma3(a=1, b=1, c=1){
    return a+b+c
}

console.log(soma3(), soma3(3), soma3(1,2,3), soma3(0,0,0))

```
#### Formas corretas de fazer declaraçãoes
```javascript
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
```
#### Quando precisamos fazer uma função onde ela não infuencia no escopo global usa-se IIFE 
```javascript
//IIFE -> Immediately Invoked Function Expression

( function(){
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente')

}) ()

```

[RETURN](https://github.com/darlanMedeiros/CursoWebModernoJavaScript2021)