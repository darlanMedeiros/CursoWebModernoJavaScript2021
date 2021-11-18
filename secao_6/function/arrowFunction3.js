//Em node o global está presente em todo código
//Uma função arraw é criada com module.exports portanto o this nunca irá variar.

let comparaComThis = function (param){
    console.log(this === param)
}

comparaComThis(global)

 const obj ={}

 comparaComThis = comparaComThis.bind(obj)
 comparaComThis(global)
 comparaComThis(obj)

 let comparaComThisArrow = param => console.log(this === param)
 comparaComThisArrow(global)
 comparaComThisArrow(module.exports)



