const { Router } = require('express')
const {ComponenteControllers} = require('../controllers')


const route = Router()
route.get('/', ComponenteControllers.getAllComponente)
route.get('/:id', ComponenteControllers.getComponente)
route.post('/', ComponenteControllers.addComponente)
route.put('/:id', ComponenteControllers.updateComponente)
route.delete('/:id', ComponenteControllers.deleteComponente)


module.exports = route