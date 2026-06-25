export default function navScrollTop (){

    window.addEventListener("scroll", () => {
        const scrollTop = document.documentElement.scrollTop; //ScrollTop: cuántos píxeles has bajado desde arriba

    //OJO:Aqui uso JS pa poder pisar codigo Bostrap q tiene importamnt!!

        if(scrollTop > 600){
        // aquí añades clase a tu nav
            //document.querySelector("nav").classList.add("scrolled")
            document.querySelector("nav").style.backgroundColor = "grey";
            document.querySelector("nav").classList.remove("bg-body-tertiary")
        } else {
            //document.querySelector("nav").classList.remove("scrolled")
            document.querySelector("nav").classList.add("bg-body-tertiary")
        }
    });





}