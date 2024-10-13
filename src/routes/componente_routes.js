const { Router } = require('express')
const {ComponenteControllers} = require('../controllers')
const { existsById, validateSchema} = require('../middlewares/middleware')
const { Componente } = require('../models') 
const componenteSchema = require('../schemas/componente_schemas')

const route = Router()
route.get('/', ComponenteControllers.getAllComponente)
route.get('/:id', existsById(Componente), ComponenteControllers.getComponente)
route.post('/', validateSchema(componenteSchema),ComponenteControllers.addComponente)
route.put('/:id', validateSchema(componenteSchema) , existsById(Componente), ComponenteControllers.updateComponente)
route.delete('/:id', existsById(Componente), ComponenteControllers.deleteComponente)
route.get('/:id/productos', existsById(Componente) ,ComponenteControllers.getProductos)

module.exports = route