import React, {Fragment, useContext}  from 'react'
import {Link} from "react-router-dom";
import { DataContext } from "../../context/Dataprovider";


export const ProductoItem=({
id,
title,
price,
image,
category
})=>{

    const value = useContext(DataContext);
    const addCarrito = value.addCarrito;



    return(

   
        <div className="producto">
        <a href="#">
        <div className="producto__img">
            <img src={image} alt={title}/>
        </div>
        </a>
        <div className="producto__footer">
            <h1> {title}</h1>
            <p> {category}</p>
            <p className="price">${price}</p>
        </div>
        <div className="buttom">
            <div1><a href="https://login-xfx7.onrender.com"  className="btn">Añadir al carrito</a></div1>
            
        </div>
        </div>
        
        
    )
}