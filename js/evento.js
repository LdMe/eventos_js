import Modal from "./modal.js"

class Evento {
    constructor(eventoPlano) {
        this.id = eventoPlano.id;
        this.name = eventoPlano.nameEs;
        this.startDate = eventoPlano.startDate;
        this.hour = eventoPlano.openingHoursEs;
        this.description = eventoPlano.descriptionEs;
        this.location = eventoPlano.municipalityEs;
        this.place = eventoPlano.placeEs;
        this.image = eventoPlano.images.length > 0 ? eventoPlano.images[0].imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJiT-UHSm6w0Jperb8SitpfoAKeMUE3uynPg5YO-2Drw&s";
    }

    renderEvento(){
        let articulo = document.createElement("article"); 
        articulo.classList.add("evento") 
        articulo.classList.add("card")

        let img  = document.createElement("img");
        img.setAttribute("src",this.image);
        img.alt = this.name;

        let titulo = document.createElement("h2");
        titulo.innerText = this.name;

        let date = document.createElement("p");
        date.innerText = this.startDate;

        articulo.appendChild(img);
        articulo.appendChild(titulo);
        articulo.appendChild(date);

        articulo.addEventListener("click",()=> new Modal(this));

        return articulo;
    }
}

export default Evento;