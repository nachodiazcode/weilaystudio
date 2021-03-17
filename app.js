const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const port = 80 ;

app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.get('/', ( req, res) => {
    res.status(200).send(`<h1>Sitio Web en Construcción</h1>`);
});

app.get('/quienes-somos', (req, res) => {
    res.status(200).send('soy nacho');
});

app.get('/contacto', (req, res) => {
   res.status(200).send(`<h1>Pronto te respondere</h1>`);
});

app.listen(port, () => {
    console.log(`Servidor Se esta esuchando en el puerto 80`);
});
