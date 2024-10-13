const { Router } = require('express')
const {FabricanteControllers} = require('../controllers')


const route = Router()
route.get('/', FabricanteControllers.getAllFabricante)
route.get('/:id', FabricanteControllers.getFabricante)
route.post('/', FabricanteControllers.addFabricante)
route.put('/:id', FabricanteControllers.updateFabricante)
route.delete('/:id', FabricanteControllers.deleteFabricante)
route.get('/:id/productos', FabricanteControllers.getProductos)


module.exports = route


