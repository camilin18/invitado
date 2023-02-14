import React,{useContext} from 'react'
import Logo from "../../imagenes/logo.png";
import {Link} from "react-router-dom";
import {DataContext} from "../../context/Dataprovider";
import Login from "../../imagenes/login-icon.jpg";
import { useAuth0 } from '@auth0/auth0-react';
import { LoginButton } from '../Login/Login';
import { Redirect } from "react-router-dom";


export const Header = () => {
    const value =useContext(DataContext);
    const [menu, setMenu]= value.menu;
    const [carrito] =value.carrito;
    
    

    console.log(menu)

    

    const toogleMenu = () =>{
        setMenu(!menu)
    }
  
    return(
      <header>
        <Link to="/productos">
            <div className="logo">
                <img src={Logo} alt="logo" width="150" height="250" di/>

            </div>
        </Link>
    <ul>
        <li style={{left:"65rem",fontSize:"2rem",top:"8rem"}}>
            <Link to="/">INICIO</Link>
        </li>
        <li style={{right:"38rem",fontSize:"2rem",top:"8rem"}}>
            <Link to="/productos">PRODUCTOS</Link>
        </li>
        <li style={{right:"38rem",fontSize:"2rem",top:"8rem"}}>
            <a href="https://login-xfx7.onrender.com">INGRESAR</a>

        </li>
    </ul>
    <div className="cart" onClick={toogleMenu}>
        <box-icon name="cart"></box-icon>
        <span className="item__total">{carrito.length}</span>
    </div>   

  
    

      </header>
    
    )
}