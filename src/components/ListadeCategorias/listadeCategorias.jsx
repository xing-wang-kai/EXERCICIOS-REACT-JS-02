import React, { Component } from 'react';

import './listadeCategorias.css';

import DeleteItem from './deleteTag/delettag';

class ListadeCategorias extends Component{
    constructor(props){
        super(props);
        this.tagNotas="";
    }

    CriaCategorias(e){
        
        if(e.key == "Enter"){
            this.tagNotas= e.target.value
            e.preventDefault();
            e.stopPropagation();
            this.props.CriaCategorias(this.tagNotas)
        }
    }

    render(){
        return(
            <section className='lista_categoria'>
                <ul className='lista_categoria-lista'>
                {this.props.castegorias.map((item, index) => {

                        return(
                       
                        <li key={index}  
                        className='lista_categoria-item'>

                            {item}
                              <DeleteItem indice={index} 
                                          apagarTag={this.props.apagarTag}/>
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