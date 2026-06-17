export function artAcordeon01(){

    console.log("entramos")


// recojo la colección de nodos con clase .botonDesplegar
const botonesDesplegar = document.querySelectorAll(".mostrar")

console.log(botonesDesplegar.length) //pa comprobar

botonesDesplegar.forEach((item)=>{
    
    item.addEventListener("click", ()=>{

        // Cojo el elemento padre y de ahí el elemento de la clase que me interesa (sólo el primero con esa clase)
        const superior = item.parentElement
        const miParrafo = superior.querySelector(".respuestaClose")

        const estaAbierto = miParrafo.classList.toggle("open")


         //miParrafo.classList.toggle("open") 

        //miParrafo.classList.contains("open") ? item.item.innerText = "Leer menos" : item.innerText = "Leer mas"

        if (estaAbierto) {
                miParrafo.style.height = miParrafo.scrollHeight + "px"
            } else {
                miParrafo.style.height = ""
            }


        item.innerText = estaAbierto ? "Leer menos" : "Leer mas"

        }) // cierra la función del addEventListener, y el ) de addEventListener

    }) // cierra la función del forEach, y el ) de forEach

} // cierra la función artAcordeon01