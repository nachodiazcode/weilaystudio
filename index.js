const express = require('express');
const server = express();

//port 
<<<<<<< HEAD
const port = 8080;
=======
const port = 3000 ;
>>>>>>> 1cfd9eeba439603fa7495338937b8aee03fe7316

server.get('/', (req, res)=>{
   return res.status(200).send(`<h1> Bienvenido a WeilayStudio <h1>`);
});

server.listen(port, function() {
    console.log(`Servidor Se esta esuchando en el puerto : ${port}`);
});
