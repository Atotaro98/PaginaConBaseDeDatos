var express = require('express');
var router = express.Router();
const productosModelo = require("../models/productosModels")




/* GET es para consultar, es retorna datos */
router.get('/', async function(req, res, next) {

  let buscar = {};
  if(req.query.buscar){
    buscar = {nombre:req.query.buscar};
  }
  let documentos = await productosModelo.find(buscar)
  res.json(documentos);




  
});
router.get('/:id', async function(req, res, next) {
    console.log(req.params.id)
    let documentos = await productosModelo.findById(req.params.id)
    res.json(documentos);
  });





//POST, para crear (insertar en BD)

router.post('/', async function(req, res, next) {
    console.log(req.body)
    let producto = new productosModelo({
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      precio: req.body.precio,
      cantidad:req.body.cantidad
    })
    let documentos = await producto.save()
    res.json(documentos);
});



router.put('/:id', async function(req, res, next) {
  let documentos = await productosModelo.update({ _id: req.params.id}, req.body, { multi: false })
  res.json(documentos);
});




router.delete('/:id', async function(req, res, next) {
  let documentos = await productosModelo.deleteOne({_id:req.params.id})
  res.json(documentos);
});

module.exports = router;
