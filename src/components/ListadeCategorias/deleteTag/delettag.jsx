import React from "react";
import { Component } from "react";
import {ReactComponent as DeleteSVG} from "../../../assets/DeleteSVG.svg"

class DeleteItem extends Component{
    
    handleapagar(){
        this.props.apagarTag(this.props.indice);
      }

    render(){
        return(
            <DeleteSVG onClick={this.handleapagar.bind(this)}/> 
        )
    }

}

export default DeleteItem;