const express = require('express');
const server = express();

//port 

const port = 8080 ; 

server.get('/', (req, res)=>{
   return res.status(200).send(`<h1> Bienvenido a WeilayStudio <h1>`);
});

server.listen(port, function() {
    console.log(`Servidor Se esta esuchando en el puerto : ${port}`);
});
