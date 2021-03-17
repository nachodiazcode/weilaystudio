const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const router = express.Router();

const port = 80 ;

app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

router.get('/', ( req, res) => {
    res.status(200).send(`<h1>Sitio Web en Construcción</h1>`);
});

router.get('/quienes-somos', (req, res) => {
   return res.status(200).send('soy nacho');
})

app.listen(port, async () => {
  await  console.log(`Servidor Se esta esuchando en el puerto 80`);
});
