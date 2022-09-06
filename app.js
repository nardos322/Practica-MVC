const express = require('express');
const app = express();
const path = require('path');

const mainRouter = require('./routers/main');

app.use(express.static(path.join(__dirname, './public')));



app.use('/', mainRouter); // me gustiona todo el home

app.set('view engine', 'ejs');









app.listen(3000, () => {
    console.log('Servidor funcionando');
});