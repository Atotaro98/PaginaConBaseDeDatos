var express = require('express');
var router = express.Router();
const usersController = require("../controllers/usuariocontrol")

router.get('/', function(req, res, next) {
    res.render('index', { title: 'La Base de Datos de Usuarios' });
  });


/* GET users listing. */
router.post('/registro', usersController.registro);
router.post('/login', usersController.login);
module.exports = router;
