const express = require('express')
const rutas = require('./routes')
const sequelize = require('./config')
const process = require('process')
const PORT = process.env.BIND_PORT || 3000

const app = express()
app.use(express.json())
app.use('/', rutas)


sequelize.sync()
    .then(() => console.log('Base de datos sincronizada'))
    .catch(err => console.log('Error al sincronizar la base de datos', err));

app.listen(PORT, () => {
    console.log(`Iniciando servicio en puerto ${PORT}`)
    //sequelize.sync({ force: true })
    

})