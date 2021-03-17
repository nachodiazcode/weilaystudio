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
   return res.status(200).send('soy nacho');
})

app.get('/contacto', (req, res) => {
  return res.status(200).send(`<h1>Pronto te respondere, estoy construyendo el sitio</h1>`);
})
app.get('/historia ', (req, res) => {
  return res.status(200).send(`<p>Lorem ipsum dolor sit amet </p>`);
})

app.listen(port, async () => {
  await  console.log(`Servidor Se esta esuchando en el puerto 80`);
});
