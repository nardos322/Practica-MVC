const express = require('express');
const router = express.Router()
const mainController = require('../controllers/mainController');


// esto se concatena con la direccion que hay en app.js y se ejecuta el metodo que hay
// en mainController que esta en la carpeta controllers
router.get('/', mainController.index);
router.get('/about', mainController.about);

module.exports = router //recordar siempre exportar el router para requerirlo en app.js