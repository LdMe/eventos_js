

class Modal {
    constructor(evento){
        this.evento = evento;
        this.renderModal();

    }
    closeModal(seccionModal,modal){
        modal.remove();
        seccionModal.classList.remove("visible");

    }
    renderModal(){
        let seccionModal = document.getElementById("modal");
        seccionModal.classList.add("visible");
        let modal = document.createElement("section");
        modal.classList.add("modal");
        let img = document.createElement("img");
        img.classList.add("image");
        img.src = this.evento.image;
        let title = document.createElement("h2");
        title.innerText = this.evento.name;
        let description = document.createElement("article");
        description.innerHTML = this.evento.description;
        modal.appendChild(img);
        modal.appendChild(title);
        modal.appendChild(description);
        seccionModal.innerHTML="";
        seccionModal.appendChild(modal);
        let botonCerrar = document.createElement("button");
        botonCerrar.innerText="X";
        modal.addEventListener("click",(event)=> event.stopPropagation());
        botonCerrar.addEventListener("click",()=>this.closeModal(seccionModal,modal));
        seccionModal.addEventListener("click",()=>this.closeModal(seccionModal,modal));
        modal.appendChild(botonCerrar);
    }
}

export default Modal;