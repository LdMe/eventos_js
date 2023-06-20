import TipoEvento from "./tipoEvento.js";

class SeccionTipos {
    constructor(){
        this.tipos = [];
    }

    cargarTipos(callback){
        fetch('https://api.euskadi.eus/culture/events/v1.0/eventType')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.tipos = data.map(tipo => new TipoEvento(tipo.id,tipo.nameEs,callback));
            this.renderSeccion();
        })
        .catch(error => console.log(error));
    }
    renderSeccion(){
        let seccion = document.getElementById("tipos-evento");
        seccion.innerHTML = "";
        this.tipos.forEach(element => {
            let html = element.render();
            seccion.appendChild(html);
        });
    }
}


export default SeccionTipos