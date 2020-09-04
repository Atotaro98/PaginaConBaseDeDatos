import React from 'react';
import {Link} from "react-router-dom";
function Producto({data}) {
  return (

   <section class="contenedor display texto-centrado">
   <div class="columna animated fadeIn">
       <h2>{data.nombre}</h2>
       <p class="precio">Precio: ${data.precio}</p>
     

       <hr></hr>
  
       <p className="descripcion">Descripcion del Producto:</p>
       <p> {data.descripcion}</p>
       <hr></hr>
       <Link  className="detalle" to={'producto/'+data._id} >Ver detalle</Link>
   </div>

  </section>

  );
}

export default Producto;