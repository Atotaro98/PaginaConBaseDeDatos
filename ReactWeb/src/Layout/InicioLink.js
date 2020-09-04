import React,{ useState } from 'react';
import {Link} from "react-router-dom";
import logo from '../images/flooop.png'

function InicioLink(){
    return(
        <div className="App-header">
            <div className="izquierda">
            <img className="logo" src={logo} alt="Logo" />
            </div>

            <div className="derecha">
            <Link className="home" to={'/'} >Home</Link>
            <Link className="login" to={'/login'} >Login</Link>
            <Link className="registro" to={'/registro'} >Registro</Link>
            </div>
           
            
            
        </div>

    );
    }
export default InicioLink;