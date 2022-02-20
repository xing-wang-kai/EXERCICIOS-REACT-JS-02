import React, { Component } from 'react';

import './listadeCategorias.css';

import DeleteItem from './deleteTag/delettag';

class ListadeCategorias extends Component{
    constructor(){
        super()
        this.state = {
            newcategorias:[]
        }
        this.inscrever = this._novacategorias.bind(this)
    }

    componentDidMount(){
        this.props.categorias.Inscrever(this.inscrever);
    }
    componentWillUnmount(){
        this.props.categorias.desinscrever(this.inscrever)
      }
    _novacategorias(categorias){
        this.setState({...this.state, categorias})
    }

    CriaCategorias(e){
        
        if(e.key == "Enter"){
            let categorias = e.target.value
            e.preventDefault();
            e.stopPropagation();
            this.props.AdicionarCategoria(categorias)
        }
    }

    render(){
        return(
            <section className='lista_categoria'>
                <ul className='lista_categoria-lista'>
                {this.props.categorias.categorias.map((item, index) => {

                        return(
                       
                        <li key={index}  
                        className='lista_categoria-item'>

                            {item}
                              <DeleteItem indice={index} 
                                          DeletarCategoria={this.props.DeletarCategoria}/>
                        </li>
                        
                        
                        );
                        
                    })}
                </ul>   
                <input 
                className='lista_categoria-input' 
                type="text" 
                placeholder='Adicone uma categoria'
                onKeyUp={this.CriaCategorias.bind(this)}/>
            </section>
            

        );
    }
}

export default ListadeCategorias;