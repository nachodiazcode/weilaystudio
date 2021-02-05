const express = require('express')
const app = express()

const port = 80 

app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get('/', ( req, res) => {
    res.status(200).send(`<h2>Sitio Web en Construcción</h2> `)
})

app.listen(port, async ()=>{
  await  console.log(`Servidor Se esta esuchando en el puerto 80`)
})