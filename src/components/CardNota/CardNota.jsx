import React, { Component } from "react";
import "./estilo.css";
import {ReactComponent as DeleteSVG} from "../../assets/DeleteSVG.svg";

class CardNota extends Component {
  apagar(){
    this.props.apagarNota(this.props.indice);

  }
  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          <DeleteSVG 
              onClick={this.apagar.bind(this)}
              className="deletsvg"/>
        </header>
        <p className="card-nota_texto">{this.props.texto}</p>
        
      </section>
    );
  }
}

export default CardNota;

/**
 * Posso importar o componet SVG como três formas
 * 1) com tag img src={NomeSVG} - import NomeSVG from "../"
 * 2) como component <NomeSVG/> - import {ReactComponent as NomeSvg} from "../"
 * 3) Importar com a propria tag que veem no SVGs
 */