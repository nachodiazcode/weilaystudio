const express = require('express');
const app = express();
const cors = require('cors');

const port = 80 ;

app.listen(port, function() {
    console.log("Servidor Se esta esuchando en el puerto 80");
});
