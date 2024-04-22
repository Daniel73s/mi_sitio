const express = require('express');
require('dotenv').config()
const { listaProductos } = require('./data/muestras');
const app = express();
//motor de plantillas
app.set('view engine','ejs');
app.set('views',__dirname+'/views');
// app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));
// middelwares
app.get('/', (req, res) => {
    const lista = listaProductos;
    res.render('index', {
        titulo: "titulo del sitio",
        subtitulo: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam saepe labore, nisi ea laborum minima.",
        fecha_actual: new Date().toDateString(),
        items: lista
    });
});

app.get('/detalle/:id', (req, res) => {
    // const id = req.params.id;
    app.use(express.static(__dirname + '/public'));
    const item = {
        // id,
        nombre: 'nombre de item',
        descripcion: 'descripcion del item',
        date: new Date().toDateString(),
        imagen: 'imagen'
    }
    res.render('detalle', {
        item,
        titulo:'titulo de la pagina'
    });
});

app.get('/acercade', (req, res) => {
    // res.render('elements', {});
    res.render('acercade');
});



app.get('*', (req, res) => {
    res.sendFile(__dirname + "/public/404.html");
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT || 3000}`);
});