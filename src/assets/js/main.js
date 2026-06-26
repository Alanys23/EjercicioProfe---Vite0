import '../scss/main.scss'



import './assets/_artJs.js'

//import "./assets/_artAcordeon01.js"

import { artAcordeon01 } from './assets/_artAcordeon01.js' //esto es sin Default, tomaria varias funciones q estan en ese archivo
//import artSlider01 from './assets/_artSlider01.js'
import topBotom from './assets/_topBotom.js'
import darkMode from './assets/_darkMode.js'
import Observer from './assets/_Observer.js'
import navScrollTop from './assets/_navScrollTop.js'
import modal from './assets/_modal.js'

artAcordeon01() //aqui decido cuando se ejecuta, sino se ejecuta asi pq si al momento de importar

document.addEventListener("DOMContentLoaded", () => { //aqui si o si se carga cuando se cargue primero el dompor seguridad si alguoienmuebve el hmtl)

    const $main = document.querySelector("main");
    artAcordeon01();
   // artSlider01();
   // topBotom(); //esto ya no

    $main.appendChild(topBotom());

    darkMode();

    Observer();

    navScrollTop();
    $main.appendChild(modal());

    //modal();
    
})
