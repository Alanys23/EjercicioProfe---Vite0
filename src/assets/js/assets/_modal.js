export default function modal(template){
    //console.log("modal");
console.log(template,"DESDE MODAL")
    const $modal = document.createElement("div");
    $modal.id = "modal";
    
    //console.log("mMdal", $modal);
    
    //Ojo con comilla invertida:
    $modal.innerHTML = `
        <div class="modal__container">
            <div class="modal__header">
                <span class="modal--btn-close">
                    <i class="fa-solid fa-xmark"></i>
                </span>
            </div>  
        
            
            <div class = "modal__body">
            ${template}
            </div>
            

        </div>
        `;

    const $btnClose = $modal.querySelector(".modal--btn-close");
    const $modalContainer = $modal.querySelector(".moda1__container");

    $modal.addEventListener("click", () => {
        $modal.remove();
    })

    $modal.addEventListener("click", (evento) => {
        //console.log(event.target);
        if(event.target.closest("[data-modal-close]")){
           // console.log(event.target);
           $modal.remove(); //quita elemento modal
        }

        if(!$modalContainer.contains(event.target)){ //todo lo q este fuera,hace clik y se cierra
            //console.log(event.target);
            $modal.remove();
        }

    })


    return $modal;

}