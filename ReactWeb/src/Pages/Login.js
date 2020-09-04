import React,{ useState } from 'react';
//siempre el nombre de la clase igual al .js
function Login(){
    const [form, setForm] = useState({user:'',password:''})
    const handleChange= (e) =>{
    setForm({
        ...form,
        [e.target.name]:e.target.value
    })
    e.preventDefault();
    }

    const handleSubmit = (e)=>{
        console.log(form)
        fetch("http://localhost:1998/usuario/login",{
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
            Usario:
            <input type="text"  className="info"  name="user"  value={form.user} onChange={handleChange} />
            </label>
            <br></br>
           
            <label>
            Contraseña:
            <input type="password"  className="info"  name="password" value={form.password}     onChange={handleChange}/>
            </label>
            <br></br>
            <input type="submit" value="Log in"  />
        </form> 
        </div>

    );
    }
export default Login;