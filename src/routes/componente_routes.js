const { Router } = require('express')
const { ComponenteControllers } = require('../controllers')
const { existsById, validateSchema } = require('../middlewares/middleware')
const { Componente } = require('../models')
const componenteSchema = require('../schemas/componente_schemas')

const route = Router()
route.get('/', ComponenteControllers.getAllComponentes)
route.get('/:id', existsById(Componente), ComponenteControllers.getComponenteById)
route.post('/', validateSchema(componenteSchema), ComponenteControllers.addComponente)
route.put('/:id', validateSchema(componenteSchema), existsById(Componente), ComponenteControllers.updateComponente)
route.delete('/:id', existsById(Componente), ComponenteControllers.deleteComponente)
route.get('/:id/productos', existsById(Componente), ComponenteControllers.getAllProductosDeComponente)

module.exports = route