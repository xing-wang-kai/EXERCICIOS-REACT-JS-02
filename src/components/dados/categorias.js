
export default class Categorias {
    constructor(){
        this.categorias = [];
        this._inscritos = [];
    }
    AdicionarCategoria(categoria){
        this.categorias.push(categoria);
        this.notificar();
    }

    DeletarCategoria(indice){
        this.categorias.splice(indice, 1);
        this.notificar();
    }

    Inscrever(func){
        this._inscritos.push(func);
    }
    desinscrever(func){
        this._inscritos = this._inscritos.filter(f => f!== func);
    }

    notificar(){
        this._inscritos.forEach(func => {func(this.categorias)} )
    }

}