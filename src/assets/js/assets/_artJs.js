
// Variables y constantes

let mivariable
var miotravariable //esto está obsoleto

const miValorInalterable = "cualquiercosa"

mivariable = "Igor"
miotravariable = "Aranaz"

let num1 = 10.50
let num2 = 8
let resultado = num1 * num2

console.log(mivariable + " " + miotravariable)
console.log(resultado) 


// aquí recojo un elemento html dentro de una constante
// const elementoHtmlBoton = document.getElementById("botonID")
const elementoHtmlBoton = document.querySelector("#botonID")
// a través de esa constante (colección html) le cambio/agrego propiedades
console.log(elementoHtmlBoton)

// Evento de escucha sobre un elemento recogido en una constante (evento tipo click)
elementoHtmlBoton.addEventListener("click", function(event){
    
    event.currentTarget.style.backgroundColor="pink"
    this.style.color="green"
    elementoHtmlBoton.style.border="3px solid black"
})



// recojo todos los elementos html que tengan la clase "boton"
// La constante en la que los recojo cuarda una colección de items
const botones = document.querySelectorAll(".boton")
// const botones = document.getElementsByClassName("boton")

// opción 1
// forof para recorrer botones
for(const boton of botones){
    boton.addEventListener("click", function(){  
        e.currentTarget.style.border="2px solid red"          
        this.style.backgroundColor="pink"
        boton.style.color="green"
    })
}

// opción 2
// función normal con foreach para recorrer botones
botones.forEach(function(boton){    
    boton.addEventListener("click", function(e){  
        e.currentTarget.style.border="2px solid blue"      
        this.style.backgroundColor="pink"
        boton.style.color="green"
    })

})

// opción 3
// función flecha con foreach para recorrer botones
botones.forEach((boton)=>{    
    boton.addEventListener("click", (e)=>{

        e.currentTarget.style.border="2px solid green"  
        this.style.backgroundColor="pink"
        boton.style.color="green"

    })

})




