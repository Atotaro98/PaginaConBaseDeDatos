//COnectarnos a la BD
const mongoose = require('../bin/mongodb')
const Schema = mongoose.Schema
//Definir el schema
const MainSchema = new Schema({
    nombre: {
        type:String,
        required:true,
    },
    descripcion: {
        type:String,
        
    },
    precio:  {
        type:Number,
        required:true,
        min:0

    },
    cantidad: {
        type:Number,
        
    },
})

module.exports=mongoose.model("Productos",MainSchema)