import React,{ Component } from 'react';
import {Link} from "react-router-dom"
//siempre el nombre de la clase igual al .js
class Inicio extends Component{
 constructor(props){ //props hace que se pueda llamar a los componentes del padre al hijo
    super(props) //Llama a el component de constructor
    this.state={


        login:false,
        opciones:[
            {
                path:"/",
                label:"Home"
                
            },

            {
                path:"/login",
                label:"Ingresar"
            },
            {
                path:"/registro",
                label:"Registrarse"
            }
            
   
    ]
    }


 }
    handleClick = ()=>{
        this.setState({
            opciones:[
                {
                    path:"/",
                    label:"Home"
                },
                {
                    path:"/login",
                    label:"Login"
                }
       
            ]

        })
    }

  
     

    render(){
        return(

            <>
                 
                {/* {this.props.data} */}
                {this.state.opciones.map((opcion, index)=><div className="opciones" style={{ textDecoration: 'none' }}><Link key={index} to={opcion.path}> {opcion.label} </Link> </div>)} 
                <button onClick={this.handleClick}>  Logout  </button>
                {/* Map hace como function con el opcion=> */}


        
            </>

        )
    }

}

export default Inicio

















