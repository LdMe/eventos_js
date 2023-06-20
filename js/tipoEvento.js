
class TipoEvento {
    constructor(id,nombre,callback){
        this.id = id;
        this.nombre = nombre;
        this.callback = callback;
    }
    render(){
        let div = document.createElement('div');
        div.className = 'tipoEvento';
        div.id = `tipo-${this.id}`; // id="tipo-1" para diferenciar de otros elementos con id="1"
        div.innerText = this.nombre;
        div.addEventListener('click',() =>this.callback(this.id));
        return div;
    }
    renderSeccionEventos(){
        alert("Javascript tiene sus deficiencias")
    }
}

export default TipoEvento;