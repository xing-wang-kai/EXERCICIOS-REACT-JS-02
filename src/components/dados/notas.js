export default class Notas{
    constructor(){
        this.notas = []
        this._inscritos = [];
    }
    AdicionarNota(titulo, texto, categoria){
        const Newnote = new NovaNota(titulo, texto, categoria);
        this.notas.push(Newnote)
        this.notificar();
    }

    DeletarNota(indice){
        this.notas.splice(indice, 1);
        this.notificar();
    }

    Inscrever(func){
        this._inscritos.push(func);
    }

    desinscrever(func){
        this._inscritos = this._inscritos.filter(f => f!== func);
    }

    notificar(){
        this._inscritos.forEach(func => {func(this.notas)} )
        
    }
}

class NovaNota{
    constructor(titulo, texto,categoria){
        this.titulo = titulo;
        this.texto = texto;
        this.categoria = categoria;
    }
}