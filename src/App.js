import React from "react";
import{ Header } from "./Componentes/Header";
import 'boxicons';
import{BrowserRouter as Router} from "react-router-dom";
import {Paginas} from "./Componentes/Paginas";
import {DataProvider} from "./context/Dataprovider";
import {Carrito} from "./Componentes/Carrito";
import { LoginButton } from "./Componentes/Login/Login";
import { LogoutButton } from "./Componentes/logout/Logout";
import { Profile} from "./Componentes/profile/profile";
import {useAuth0} from '@auth0/auth0-react';
import Footer from "./footer/Footer";



function App() {
  const {isAuthenticated} = useAuth0();
  return (
    <DataProvider>
    <div className="App">
    
      <Router>
      <Header/>
     <Carrito/>
     <Paginas />
     <Footer/>
     </Router>
    </div>
    </DataProvider>
  );
}

export default App;
