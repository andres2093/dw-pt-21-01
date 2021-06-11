/*  Archivo controllers/usuarios.js
 *  Simulando la respuesta de objetos Usuario
 *  en un futuro aquí se utilizarán los modelos
 */

const Mascota = require('../models/Mascota')

function crear(req, res) {
  // Instanciaremos un nuevo usuario utilizando la clase usuario
  var mascota = new Mascota(req.body)
  res.status(201).send(mascota)
}

function obtener(req, res) {
  // Simulando dos Mascotas y respondiendolos
  var mascota1 = new Mascota(1, 'Nochipa', 'Perro', 'https://www.perrosrazapequeña.com/wp-content/uploads/2018/06/chihuahua-pelo-largo.jpg','bien bonita','1','CDMX');
  var mascota2 = new Mascota(2, 'Tito', 'Tortuga', 'https://img.culturacolectiva.com/featured/2019/02/27/1551305058738/tortugas-japonesas-se-vuelven-plaga-en-mexico-high.png','verde','1','CDMX');
  res.send([mascota1, mascota2])
}

function modificar(req, res) {
  // simulando un mascota previamente existente que el mascota utili
  var mascota1 = new Mascota(req.params.id, 'Nochipa', 'Perro', 'https://www.perrosrazapequeña.com/wp-content/uploads/2018/06/chihuahua-pelo-largo.jpg','bien bonita','1','CDMX');
  var modificaciones = req.body
  mascota1 = { ...mascota1, ...modificaciones }
  res.send(mascota1)
}

function eliminar(req, res) {
  res.status(200).send(`Mascota ${req.params.id} eliminada`);
}

module.exports = {
  crear,
  obtener,
  modificar,
  eliminar
}