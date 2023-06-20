import Evento from "./evento.js";

class SeccionEventos {
    constructor() {
        this.eventos = [];
    }

    async cargarEventos(tipo = 0){
        try{
            let tipoString = tipo > 0 ? `&type=${tipo}` : "";
            
            let result = await fetch("https://api.euskadi.eus/culture/events/v1.0/events/upcoming?_elements=20&_page=1&provinceNoraCode=48"+tipoString);
            let data  = await result.json();
            console.log(data);
            this.eventos = data.items.map(eventoPlano => new Evento(eventoPlano))
            this.renderSeccionEventos();
        }
        catch(error){
            console.error(error);
        }
    }
    renderSeccionEventos(){
        let seccion = document.getElementById("eventos");
        seccion.innerHTML = "";
        this.eventos.forEach(element => {
            let html = element.renderEvento();
            seccion.appendChild(html);
        });
    }
}

export default SeccionEventos;
