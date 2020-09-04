import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Inicio from './Layout/Inicio'
import Login from './Pages/Login'
import Registro from './Pages/Registro'
import ProductoDetalle from './Pages/ProductoDetalle'
import InicioLink from './Layout/InicioLink'
import Home from './Pages/Home'
import {BrowserRouter, Route} from "react-router-dom"

//APP ES EL JS PADRE DE TODOS, DE ACA SALE TODO LO QUE QUERAMOS RENDERIZAR.
class App extends Component {


  
 
    render(){
        return (
            <>
              <BrowserRouter>
              <InicioLink />
              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={Login} />
              <Route path="/registro" exact component={Registro} />
              <Route path="/producto/:id" exact component={ProductoDetalle} />
              </BrowserRouter>
            </>

          );
        }
      }


export default App;