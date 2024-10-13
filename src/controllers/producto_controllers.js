const { Producto: Producto } = require('../models')

//obtener tods los productos
const getAllProducto = async (req, res) => {
  try {
    const productos = await Producto.findAll();
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({ error : error.message });
  }
}

//obtener productos por id
const getProducto = async (req, res) => {
  const producto = await Producto.findByPk(req.params.id);
    if (!producto) {
        return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.status(200).json(producto);

}

//crear un producto
const addProducto = async (req, res) => {
  const producto = req.body;
    try {
        const resultado = await Producto.create({
            nombre: producto.nombre,
            descripcion: producto.descripcion
        })
        res.status(201).send(resultado)

    } catch (error) {
        res.status(500).json({message : `error al intentar crear Producto: "${error}"`})
    }

}

//modificar los datos de un producto en particular
const updateProducto = async (req, res) => {
  const producto = await Producto.findByPk(req.params.id);
    if (!producto) {
        return res.status(404).json({ error: 'Producto no encontrado' });
    }

    const productoActualizado = req.body;
    try {
        const resultado = await Producto.update({
            nombre: productoActualizado.nombre,
            descripcion: productoActualizado.descripcion
        }, {where: {id: req.params.id}})
        const productoModificado = await Producto.findByPk(req.params.id);
        res.status(200).json(productoModificado)

    } catch (error) {
        res.status(500).json({error : `error al intentar actualizar Producto: "${error}"`})
    }
}

//borrar un producto en particular
const deleteProducto = async (req, res) => {
  const producto = await Producto.findByPk(req.params.id);
  if (!producto) {
      return res.status(404).json({ message: 'Producto no encontrado' });
  }
  try {
      await producto.destroy({where: {id: req.params.id}});
      res.status(200).json({ message: 'OK' });
      } catch (error) {
      res.status(500).json({ error: error.message });
  }
}

//obtener todos los productos de un producto

module.exports = {getAllProducto, getProducto, addProducto, updateProducto, deleteProducto}