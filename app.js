const express = require('express');
const app = express();
const cors = require('cors');

const port = 80 ;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.get('/', ( req, res) => {
    res.status(200).send(`<h1>Sitio Web en Construcción</h1>`);
});

app.listen(port,  () => {
     console.log(`Servidor Se esta esuchando en el puerto 80`);
});
