export default function validationForm(){

    //const $form = document.querySelector("form");

    // $form.addEventListener("submit", (event) =>{
    //     event.preventDefault(); //que no recargue todo la pagin q viene nativo del navegador
    // })

    const errors = {
        //name : "El nombre debe contener solo letras y 3 digitos"
        name: {
            pattern:"[A-Aa-z]{3}",
            message: "El nombre debe contener solo letras y 3 digitos"
        },

        surname: {
            pattern:"[A-Aa-z]{3}",
            message: "El apellido debe contener solo letras y 3 digitos"
        }
    }
    //Esto propagaria el cancelar q se refresque la pagina a cualquier elemento dentro del Form:
    document.addEventListener("submit", (event) =>{
        event.preventDefault(); //que no recargue todo la pagin q viene nativo del navegador
        const $form = event.target;
        //console.log($form.name);

        const $inputs = $form.querySelectorAll("input");
        

        $inputs.forEach(input => {
            //const pattern = input.pattern;
            //console.log(pattern);
           // const pattern = new RegExp(input.pattern); //aqui lo convierto a exp. regular
           //const pattern = new RegExp(input.name);

           const pattern = new RegExp(errors[input.name].pattern);

            const $span = document.createElement("span");

            //$span.innerText = errors[input.name];

            $span.innerText = errors[input.name].message;//pa obtener atributo message

            //ESTO NO FUNCIONA!!:
            // if(!pattern.exec(input.value)){
            //     //console.log("El valor cumple con la expresion regular");
            //     input.insertAdjacenHtml("beforebegin",$span); //añadimo etiqueta d error
            // }

            const $formField = input.querySelector(".form__field");
            //ESTO FUNCIONA:
            if(!pattern.test(input.value)){
                
            } else{

            }
        });
        
    })
}

