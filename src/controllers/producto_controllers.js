const { Producto, Fabricante, Componente } = require('../models')
const controller = {}

//obtener tods los productos
const getAllProductos = async (req, res) => {
    try {
        const productos = await Producto.findAll();
        res.status(200).json(productos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
controller.getAllProductos = getAllProductos

//obtener productos por id
const getProductoById = async (req, res) => {
    const producto = req.modelo || await Producto.findByPk(req.params.id);
    res.status(200).json(producto);
}
controller.getProductoById = getProductoById

//crear un producto
const addProducto = async (req, res) => {
    const producto = req.body;
    try {
        const resultado = await Producto.create({
            nombre: producto.nombre,
            descripcion: producto.descripcion,
            precio: producto.precio,
            pathImg: producto.pathImg
        })
        res.status(201).send(resultado)

    } catch (error) {
        res.status(500).json({ message: `error al intentar crear Producto: "${error}"` })
    }
}
controller.addProducto = addProducto

//modificar los datos de un producto en particular
const updateProducto = async (req, res) => {
    const productoActualizado = req.body;
    try {
        await Producto.update({
            nombre: productoActualizado.nombre,
            descripcion: productoActualizado.descripcion,
            precio: productoActualizado.precio,
            pathImg: productoActualizado.pathImg
        }, { where: { id: req.params.id } })
        const productoModificado = await Producto.findByPk(req.params.id);
        res.status(200).json(productoModificado)

    } catch (error) {
        res.status(500).json({ error: `error al intentar actualizar Producto: "${error}"` })
    }
}
controller.updateProducto = updateProducto

//borrar un producto en particular
const deleteProducto = async (req, res) => {
    try {
        await Producto.destroy({ where: { id: req.params.id } });
        res.status(200).json({ message: 'OK' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
controller.deleteProducto = deleteProducto

// asigna fabricante a un producto
const associateFabricanteAProductoById = async (req, res) => {
    const producto = req.modelo || await Producto.findByPk(req.params.id);

    const fabricantes = req.body;
    if (!Array.isArray(fabricantes)) {
        return res.status(500).json({ message: `se espera una lista de fabricantes` })
    }
    for (const i in fabricantes) {
        const fabricante = await Fabricante.findByPk(fabricantes[i].id)
        if (!fabricante) {
            return res.status(404).json({ message: `no se encontró un fabricante con el id '${fabricantes[i].id}'` });
        }
        fabricantes[i] = fabricante
    }
    try {
        producto.addFabricantes(fabricantes)
    } catch (err) {
        const msg = `error al asignar fabricantes a un producto: '${err}'`
        console.error(msg)
        return res.status(500).json({ message: msg })
    }
    res.status(200).json({ message: 'OK' });
}
controller.associateFabricanteAProductoById = associateFabricanteAProductoById


// obtiene los fabricantes de un producto
const getAllFabricantesDeProducto = async (req, res) => {
    const idProducto = req.params.id
    const producto = await Producto.findByPk(idProducto, {
        include: { model: Fabricante, as: "Fabricantes" }
    });
    res.status(200).json(producto);
}
controller.getAllFabricantesDeProducto = getAllFabricantesDeProducto

// asigna componentes a un producto
const associateComponenteAProductoById = async (req, res) => {
    const producto = req.modelo || await Producto.findByPk(req.params.id);
    
    const componentes = req.body;
    if (!Array.isArray(componentes)) {
        return res.status(500).json({ message: `se espera una lista de componentes` })
    }
    for (const i in componentes) {
        const componente = await Componente.findByPk(componentes[i].id)
        if (!componente) {
            return res.status(404).json({ message: `no se encontró un componente con el id '${componentes[i].id}'` });
        }
        componentes[i] = componente
    }

    try {
        producto.addComponentes(componentes)
    } catch (err) {
        const msg = `error al asignar componentes a un producto: '${err}'`
        console.error(msg)
        return res.status(500).json({ message: msg })
    }

    res.status(200).json({ message: 'OK' });
}
controller.associateComponenteAProductoById = associateComponenteAProductoById

// obtiene los componentes de un producto
const getAllComponentesDeProducto = async (req, res) => {
    const idProducto = req.params.id
    const producto = await Producto.findByPk(idProducto, {
        include: { model: Componente, as: "Componentes" }
    });

    res.status(200).json(producto);
}
controller.getAllComponentesDeProducto = getAllComponentesDeProducto

module.exports = controller