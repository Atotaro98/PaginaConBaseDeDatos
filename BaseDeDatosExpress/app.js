
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const jwt = require('jsonwebtoken');


var indexRouter = require('./routes/index');
var productosRouter = require('./routes/productos');
var usuarioRouter = require('./routes/usuario');
var Hola = require('./routes/hola')

var app = express();


app.set('secretKey',process.env.SECRET_KEY)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


/** HEADER INICIO */
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','GET,POST,DELETE,PUT');
  next();
});
app.options("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With,x-access-token');
  res.send(200);
});
/** HEADER FIN */

app.use('/', indexRouter);
app.use('/productos', productosRouter);
app.use('/usuario', usuarioRouter);
app.use('/hola', Hola)
//TENGO PROBLEMAS CON EL VALIDATEUSER
function validateUser(req,res,next){
  console.log(req.app.get('secretKey'))
  jwt.verify(req.headers['x-access-token'],req.app.get('secretKey'),function(err,decoded){
    if(err){
      res.status(500).json({error:true,message:err.message})
    }else{
      console.log(decoded)
      req.body.userToken = decoded
      next();
    }
  })
}
app.validateUser = validateUser;
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({err:"error"})
});

module.exports = app;
