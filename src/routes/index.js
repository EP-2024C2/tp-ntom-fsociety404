const { Router } = require('express')
const fabricanteRoute = require('./fabricante_routes')
const componenteRoute = require('./componente_routes')
const productoRoute = require('./producto_routes')

const route = Router()
route.use('/fabricantes', fabricanteRoute)
route.use('/componentes', componenteRoute)
route.use('/productos', productoRoute)

module.exports = route

