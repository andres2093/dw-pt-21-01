var express = require('express'),
    cors = require('cors');

// Objeto global de la app
var app = express();

// configuración de middlewares
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/*********************** Mongoose Configuration *******************************/
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://introadb:introadb1234@cluster0.ijbvb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

mongoose.set("debug", true);

// Aquí se importarán los modelos Mascota y Solicitud cuando estén listos
/*********************** Mongoose Configuration *******************************/
require("./models/Usuario");
require('./config/passport');
require('./models/Mascota');
require('./models/Solicitud');

// Agregamos el código de nuestro router (routes/index.js)
app.use('/v1', require('./routes'));

// Manejando los errores 404
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Iniciando el servidor...
var server = app.listen(process.env.PORT || 3000, function(){
  console.log('Escuchando en el puerto ' + server.address().port);
});