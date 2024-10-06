const express = require('express')
const rutas = require('./routes')

const app = express()
app.use(express.json())
app.use('/', rutas)

//TODO: leer puerto de variable de entorno
const PORT = 3000
app.listen(PORT, () => {
    console.log(`Iniciando servicio en puerto ${PORT}`)
})

