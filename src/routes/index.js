const { Router } = require('express')
const fabricanteRoute = require('./fabricante_routes')

const route = Router()
route.use('/fabricantes', fabricanteRoute)

module.exports = route

