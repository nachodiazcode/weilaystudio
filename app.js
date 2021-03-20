const express = require('express');
const cors = require('cors');
const app  = express();
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

router.get('/', ( req, res) => {
    res.status(200).send(`<h1>Sitio Web en Construcción</h1>`);
});

module.exports = app
