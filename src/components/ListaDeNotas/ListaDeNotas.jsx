import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";
class ListaDeNotas extends Component {
  constructor(){
    super();
    this.state = {
      newNotas:[]
    }
    this._inscritos = this._criarNotas.bind(this)
  }

  componentDidMount(){
    this.props.notas.Inscrever(this._inscritos)
  }
  componentWillUnmount(){
    this.props.notas.desinscrever(this._inscritos)
  }

  _criarNotas(notas){
    this.setState({...this.state, notas})
  }
 
  render() {
    return (
      <ul className="lista-notas">
        {this.props.notas.notas.map((nota, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota 
                  DeletarNota={this.props.DeletarNota}
                  indice = {index}
                  titulo={nota.titulo} 
                  texto={nota.texto}
                  categoria = {nota.categoria}/>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;