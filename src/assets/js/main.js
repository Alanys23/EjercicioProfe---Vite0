import '../scss/main.scss'



import './assets/_artJs.js'

//import "./assets/_artAcordeon01.js"

import { artAcordeon01 } from './assets/_artAcordeon01.js' //esto es sin Default, tomaria varias funciones q estan en ese archivo
import artSlider01 from './assets/_artSlider01.js'
artAcordeon01() //aqui decido cuando se ejecuta, sino se ejecuta asi pq si al momento de importar

document.addEventListener("DOMContentLoaded", () => { //aqui si o si se carga cuando se cargue primero el dom)
    artAcordeon01();
    artSlider01();
})