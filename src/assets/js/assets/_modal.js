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

    $modal.addEventListener("click", () => {
        $modal.remove();
    })

    return $modal;

}