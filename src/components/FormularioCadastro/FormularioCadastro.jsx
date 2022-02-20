import React, { Component } from "react";
import "./estilo.css";
class FormularioCadastro extends Component {

  constructor(props){
    super(props);
    this.titulo ="";
    this.texto ="";
    this.categoria = "Sem categoria";
    this.state = {newcategorias:[]}
    this.inscrever = this._novasCategorias.bind(this)
  }
  componentDidMount(){
    this.props.categorias.Inscrever(this.inscrever)
    
  }
  componentWillUnmount(){
    this.props.categorias.desinscrever(this.inscrever)
  }
  _novasCategorias(categorias){
    this.setState({...this.state, categorias})
  }

  _handleTitulo(evento){
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }

  _handleTexto(evento){
    evento.stopPropagation();
    this.texto = evento.target.value;
  }
  _handleCategoria(evento){
    this.categoria = evento.target.value
  }

  _criarNota(evento){
    evento.preventDefault();
    evento.stopPropagation();
    this.props.AdicionarNota(this.titulo, this.texto, this.categoria);
    
  }
  

  render() {
    return (
      <form className="form-cadastro"
        onSubmit={this._criarNota.bind(this)}
      >
        <select onChange={this._handleCategoria.bind(this)}>
          <option>Sem categoria</option>
          {this.props.categorias.categorias.map((item, index)=> {
            return <option key={index}>--{item}</option>
          })}

        </select>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;