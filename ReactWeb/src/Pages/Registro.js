import React,{ useState } from 'react';

function Registro(){
    const [form, setForm] = useState({name:'',last_name:'',dni:'',email:'',user:'',password:'',repeatpassword:'' })
    const handleChange= (e) =>{
    setForm({
        ...form,
        [e.target.name]:e.target.value
    })
    e.preventDefault();
    }

    const handleSubmit = (e)=>{
        console.log(form)
        fetch("http://localhost:1998/usuario/registro",{
             method:"POST",
             body:JSON.stringify(form),

            headers:{
                "Content-Type":"application/json"
            }


        })
        .then(res=>res.json())
        .then(
            (result)=>{
                console.log(result)
                
             
                
                
            },
            (error) => {
                console.log("Error")
            }
        )
        e.preventDefault();
    }
    return(
        <div className="columna display centrado">
           <form onSubmit={handleSubmit} className="formulario">
            <label>
             Nombre:
            <input type="text" className="info"   name="name"  value={form.name} onChange={handleChange}  />
            </label>
            <br></br>
            <label>
            Apellido:
            <input type="text"  className="info" name="last_name"    value={form.last_name}   onChange={handleChange} />
            </label>
            <br></br>
            <label>
             DNI:
            <input type="text" className="info"   name="dni"  value={form.dni} onChange={handleChange}  />
            </label>
            <br></br>
            <label>
            Email:
            <input type="email"  className="info"  name="email"  value={form.email} onChange={handleChange} />
            </label>
            <br></br>
            <label>
            Usuario:
            <input type="text" className="info"  name="user" value={form.user}   onChange={handleChange}/>
            </label>
            <br></br>
            <label>
            Contraseña:
            <input type="password"  className="info"  name="password" value={form.password}     onChange={handleChange}/>
            </label>
            <br></br>
            <label>
           Repetir Contraseña:
            <input type="password"  className="info"  name="repeatpassword" value={form.repeatpassword}     onChange={handleChange}/>
            </label>
            <br></br>
            <input type="submit" value="Enviar Registro"  />
        </form> 
        </div>

    );
    }
export default Registro;