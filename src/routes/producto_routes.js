const { Router } = require('express')
const {ProductoControllers} = require('../controllers')


const route = Router()
route.get('/', ProductoControllers.getAllProducto)
route.get('/:id', ProductoControllers.getProducto)
route.post('/', ProductoControllers.addProducto)
route.put('/:id', ProductoControllers.updateProducto)
route.delete('/:id', ProductoControllers.deleteProducto)


module.exports = route


