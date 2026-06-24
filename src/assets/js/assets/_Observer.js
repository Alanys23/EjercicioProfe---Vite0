export default function Observer(){

    function loadElement(entradas){

        entradas.forEach((entrada) => {

        if(entrada.isIntersecting) {
            //console.log( { entrada });
            const fadeOutElements = entrada.target.querySelectorAll(".fadeOut")

            fadeOutElements.forEach(element =>{
                element.classList.remove("fadeOut");
                element.classList.add("fadeIn");
            })

        }
        })

        
    
    }

    //pa q js sea como observador:
    const observador = new IntersectionObserver(loadElement,{
        threshold: 0.1, //cuando este en 0.1 antes d ser visible ejecute la funcion.Ojo ya es convertido 1005 entre 1, 0.1%
    });

    const sections = document.querySelectorAll("section");//todos los hijos de body
    sections.forEach(section => {
        observador.observe(section);
    })


}