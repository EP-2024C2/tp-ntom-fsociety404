const { Router } = require('express')
const {ProductoControllers} = require('../controllers')


const route = Router()
route.get('/', ProductoControllers.getAllProducto)
route.get('/:id', ProductoControllers.getProducto)
route.post('/', ProductoControllers.addProducto)
route.put('/:id', ProductoControllers.updateProducto)
route.delete('/:id', ProductoControllers.deleteProducto)
route.post('/:id/fabricantes', ProductoControllers.addFabricantes)
route.get('/:id/fabricantes', ProductoControllers.getFabricantes)
route.post('/:id/componentes', ProductoControllers.addComponentes)
route.get('/:id/componentes', ProductoControllers.getComponentes)


module.exports = route


