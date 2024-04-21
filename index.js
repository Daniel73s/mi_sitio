const express = require('express');
require('dotenv').config()
const hbs = require('hbs');
const app = express()
const port = 3000

// middelwares
app.use(express.static('public'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


app.get('/', (req, res) => {
    res.render('inicio',{
        titulo:"CreatiWeb"
    });
});

app.get('/elements', (req, res) => {
    res.render('elements',{});
});

app.get('/generic', (req, res) => {
    res.render('generic',{});
});


app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT || 3000}`);
});