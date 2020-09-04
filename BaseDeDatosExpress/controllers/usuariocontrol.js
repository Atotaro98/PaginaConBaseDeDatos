const usersModels = require("../models/usuariomodels")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
module.exports={
    registro: async function(req, res, next) {
        console.log(req.body);
        try{
            let documento = await usersModels.create({ 
                name: req.body.name,
                last_name: req.body.last_name,
                dni: req.body.dni,
                email: req.body .email,
                user: req.body.user, 
                password: req.body.password,
                repeatpassword: req.body.repeatpassword
                 })
            res.json(documento)
        }catch(e){
            console.log(e)
            next(e)
        }
        
        
    },
    login: async function(req, res, next) {
        try{
            let usuario = await usersModels.findOne({user:req.body.user})
            if(usuario){
                if(bcrypt.compareSync(req.body.password,usuario.password)){
                    const token = jwt.sign({usuario:usuario._id},req.app.get('secretKey'),{expiresIn:'1h'})
                    res.json({token:token})
                }else{
                    res.json({mensaje:"Contraseña incorrecta"})
                }
            }else{
                res.json({mensaje:"Usuario incorrecto"})
            }

        }catch(e){
            next(e)
        }
    }
}