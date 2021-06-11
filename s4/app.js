// Crear proyecto de Node
// npm init -y

// Crear estructura de proyecto

// Instalar dependencias
// npm i express cors

// Agregar scripts de ejecución en package.json (atajos)

// Instalar nodemon (Solo si no lo tenemos)
// npm install -g nodemon

// Sirve para crear un servidor (API)
const express = require('express');
// El intercambio de recursos de origen cruzado o CORS 
// (Cross-origin resource sharing, en sus siglas en inglés)
const cors = require('cors');

// Objeto global de la app
var app = express();

app.use(cors());
// Encode las url`s
app.use(express.urlencoded({ extended: false }));
// Aceptar JSON`s
app.use(express.json());

app.use('/v1', require("./routes"));

app.use(function(req, res, next) {
  var err = new Error('Not found');
  err.status = 404;
  next(err);
})

var server = app.listen(3000, function() {
  console.log('Escuchando en el puerto localhost:' + 3000);
})