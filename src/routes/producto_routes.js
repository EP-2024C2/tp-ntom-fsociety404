const { Router } = require('express')
const {ProductoControllers} = require('../controllers')
const { existsById, validateSchema} = require('../middlewares/middleware')
const { Producto } = require('../models') 
const productoSchema = require('../schemas/producto_schemas')

const route = Router()
route.get('/', ProductoControllers.getAllProducto)

route.get('/:id', existsById(Producto) ,ProductoControllers.getProducto)
route.post('/', validateSchema(productoSchema), ProductoControllers.addProducto)
route.put('/:id',validateSchema(productoSchema),existsById(Producto), ProductoControllers.updateProducto)
route.delete('/:id',existsById(Producto), ProductoControllers.deleteProducto)

route.post('/:id/fabricantes',existsById(Producto), ProductoControllers.addFabricantes)
route.get('/:id/fabricantes', existsById(Producto), ProductoControllers.getFabricantes)
route.post('/:id/componentes',existsById(Producto), ProductoControllers.addComponentes)
route.get('/:id/componentes', existsById(Producto),ProductoControllers.getComponentes)


module.exports = route


