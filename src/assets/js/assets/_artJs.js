
// Variables y constantes

let mivariable
var miotravariable //esto está obsoleto

const miValorInalterable = "cualquiercosa"

mivariable = "Igor"
miotravariable = "Aranaz"

let num1 = 10
let num2 = 5
let resultado = num1 + num2


console.log(mivariable + " " + miotravariable)

console.log(resultado)


// qué pasa aquí????
const boton = document.getElementById("boton")

console.log(boton)

boton.addEventListener("click", function(){
    console.log("has presionado el botón")
})