export default function topBotom(){
    //console.log("Renderizando topBotom");
    const $btnTop = document.createElement("button");
    //creamos una clase:
    $btnTop.className = "fab-button hidden";

    //document.body.appendChild($btnTop);
    //Para Seo: html estatitico y no dinamico

    $btnTop.innerHTML = `
        <i class="fa-solid fa-arrow-up"></i>
    `;
   

    $btnTop.addEventListener("click", (e) => {
        window.scroll({ top: 0,behavior: "smooth"}); //pa q suba suave,use el transtion
    })

    window.addEventListener("scroll", () =>{
        /*console.log(`Se ha hecho scroll desde ${document.documentElement.scrollTop}px en la pagina`)*/
        const scrollTop = document.documentElement.scrollTop;

        if(scrollTop > 600){
            //$btnTop.classList.toggle("hidden");
            $btnTop.classList.remove("hidden");
            $btnTop.classList.add("show")   // aparece con animación
        } else {
            $btnTop.classList.add("hidden")
            $btnTop.classList.remove("show"); // se oculta
        }
    });




    //vamos a retornar su referencia;
    return $btnTop; //la logica esta encapsulada en la funcvon:


}