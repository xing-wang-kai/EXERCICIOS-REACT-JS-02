import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListadeCategorias from "./components/ListadeCategorias/listadeCategorias";
import Notas from "./components/dados/notas";
import Categorias from "../src/components/dados/categorias";

import "./assets/App.css";
import './assets/index.css';

class App extends Component {
  constructor(){
    super();
    this.notas = new Notas;
    this.categorias = new Categorias;
  }
 /*   this.state = {
      notas:[],
      categoria:[]
    }
  }
  */

  /*criarNota(titulo, texto, categoria){
    const novaNota = {titulo, texto, categoria};
    const novoArrayNotas = [...this.state.notas,novaNota]
    this.setState({notas:novoArrayNotas})
  }
  deletarNota(index){
    const arrayDeletar = this.state.notas;
    arrayDeletar.splice(index, 1);
    this.setState({notas:arrayDeletar})

  }
  CriaCategorias(tagNotas){
    const categoriaValue = tagNotas;
    const ArrayCategoria = [...this.state.categoria, categoriaValue];
    this.setState({categoria:ArrayCategoria})
    
  }

  deletarTag(indice){
    const arrayState = this.state.categoria;
    arrayState.splice(indice, 1);
    this.setState({categoria:arrayState})
  }
  */
  render(){
    return (
      <section className="conteudo">
          <FormularioCadastro 
          AdicionarNota={this.notas.AdicionarNota.bind(this.notas)}
          categorias = {this.categorias}
          />
      
        <main className="conteudo-principal">
          <ListadeCategorias 
          AdicionarCategoria={this.categorias.AdicionarCategoria.bind(this.categorias)}
          DeletarCategoria = {this.categorias.DeletarCategoria.bind(this.categorias)}
          categorias = {this.categorias}
          />

          <ListaDeNotas 
            DeletarNota = {this.notas.DeletarNota.bind(this.notas)}
            notas={this.notas}
            />
        </main>

      </section>
    );
  }
}

//new ListaDeNotas({notas:this.notas})
export default App;