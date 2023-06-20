import SeccionTipos from "./js/seccionTipos.js";
import SeccionEventos from "./js/seccionEventos.js";

let seccionEventos = new SeccionEventos();
let seccion  = new SeccionTipos();
seccion.cargarTipos(seccionEventos.cargarEventos);
seccion.renderSeccion();
seccionEventos.cargarEventos();