const { Router } = require('express')
const fabricanteRoute = require('./fabricante_routes')
const componenteRoute = require('./componente_routes')

const route = Router()
route.use('/fabricantes', fabricanteRoute)
route.use('/componentes', componenteRoute)

module.exports = route

