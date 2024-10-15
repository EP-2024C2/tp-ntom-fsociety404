const { Router } = require('express')
const { FabricanteControllers } = require('../controllers')
const { existsById, validateSchema } = require('../middlewares/middleware')
const { Fabricante } = require('../models')
const fabricanteSchema = require('../schemas/fabricante_schemas')

const route = Router()
route.get('/', FabricanteControllers.getAllFabricantes)
route.get('/:id', existsById(Fabricante), FabricanteControllers.getFabricanteById)
route.post('/', validateSchema(fabricanteSchema), FabricanteControllers.addFabricante)
route.put('/:id', validateSchema(fabricanteSchema), existsById(Fabricante), FabricanteControllers.updateFabricante)
route.delete('/:id', existsById(Fabricante), FabricanteControllers.deleteFabricante)
route.get('/:id/productos', existsById(Fabricante), FabricanteControllers.getAllProductosDeFabricante)

module.exports = route