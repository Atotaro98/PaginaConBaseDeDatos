import React from 'react';
import {Link} from "react-router-dom";
function ProductoDetallado({data}) {
  return (
    
    <section class="contenedor display texto-centrado">
        <div class="columna">
       <div className="detallado"><p className="descripcion">Numero ID: </p>{data._id}</div> 
       <div className="detallado"><p className="descripcion">Nombre Completo del Producto:</p> {data.nombre}</div> 
       <div className="detallado"><p className="descripcion">Descripcion del Producto: </p>{data.descripcion}</div> 
       <div className="detallado"><p className="descripcion">Precio Del Producto:</p> ${data.precio}</div> 
       <div className="detallado"><p className="descripcion">Stock del Producto: </p>{data.cantidad}</div> 
        <Link className="detalle" to={'/'} >Volver</Link>
        </div>
        </section> 
  );
}

export default ProductoDetallado;