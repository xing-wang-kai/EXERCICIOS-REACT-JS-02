import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListadeCategorias from "./components/ListadeCategorias/listadeCategorias";

import "./assets/App.css";
import './assets/index.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      notas:[],
      categoria:[]
    }
  }

  criarNota(titulo, texto){
    const novaNota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas,novaNota]
    this.setState({notas:novoArrayNotas})
  }
  deletarNota(index){
    const arrayDeletar = this.state.notas
    arrayDeletar.splice(index, 1);
    this.setState({notas:arrayDeletar})

  }
  CriaCategorias(tagNotas){
    const categoriaValue = tagNotas;
    const ArrayCategoria = [...this.state.categoria, categoriaValue];
    this.setState({categoria:ArrayCategoria})
    
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        
        <main className="conteudo-principal">
          <ListadeCategorias 
            CriaCategorias={this.CriaCategorias.bind(this)}
            castegorias = {this.state.categoria}
            />
          <ListaDeNotas 
            apagarNota = {this.deletarNota.bind(this)}
            notas={this.state.notas}
            />
        </main>

      </section>
    );
  }
}

//new ListaDeNotas({notas:this.notas})
export default App;