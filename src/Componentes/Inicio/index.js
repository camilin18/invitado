import React from 'react'
import Portada from "../../imagenes/inicio.jpg";
import {Link} from "react-router-dom";
import Main from '../../videos/Main'


export const Inicio = () =>{
    return(
        <div className="inicio">
            <Link to="/">
                
            </Link>
            <Link to="/productos">
                
            </Link>
           <Main/>
          
           
        </div>
    )
}