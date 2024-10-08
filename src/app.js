const express = require('express')
const rutas = require('./routes')
const sequelize = require('./config')

const app = express()
app.use(express.json())
app.use('/', rutas)


sequelize.sync()
    .then(() => console.log('Base de datos sincronizada'))
    .catch(err => console.log('Error al sincronizar la base de datos', err));

//TODO: leer puerto de variable de entorno
const PORT = 3000
app.listen(PORT, () => {
    console.log(`Iniciando servicio en puerto ${PORT}`)
})


console.log("prueba")
