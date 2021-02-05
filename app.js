var http = require('http');
var servidor = http.createServer(function(petición, respuesta){
    respuesta.writeHead(200, {'Content-Type' : 'text/html'});
    respuesta.write("weilaystudio.com");
    console.log("petición web");
})

servidor.listen(80)

console.log('Escuchando al puerto 80')