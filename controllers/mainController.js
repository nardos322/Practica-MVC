const path = require('path');

const mainController = {
    index: (req, res) => {
        res.render('home');
    },
    about: (req, res) => {
        res.render('about');
    }
}

module.exports = mainController // recordar siempre exportar el controlador para requerirarlo en routers