import SeccionTipos from "./js/seccionTipos.js";
import SeccionEventos from "./js/seccionEventos.js";

let seccionEventos = new SeccionEventos();
let seccion  = new SeccionTipos();
let miCallback = (tipo) => seccionEventos.cargarEventos(tipo);
seccion.cargarTipos(miCallback);
seccion.renderSeccion();
seccionEventos.cargarEventos();
