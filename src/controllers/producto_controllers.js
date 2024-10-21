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
        res.status(500).json({ error: `error al intentar crear Producto: "${error}"` })
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
    const modelo = req.modelo || await Producto.findByPk(req.params.id);
    const cantComponentesAsociados = await modelo.countComponentes()
    if(cantComponentesAsociados > 0) {
        res.status(400).json({ message: `no se puede eliminar un producto si tiene componentes asociados` });
        return
    }
    const cantFabricantesAsociados = await modelo.countFabricantes()
    if(cantFabricantesAsociados > 0) {
        res.status(400).json({ message: `no se puede eliminar un producto si tiene fabricantes asociados` });
        return
    }

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
        return res.status(500).json({ error: `se espera una lista de fabricantes` })
    }
    for (const i in fabricantes) {
        const fabricante = await Fabricante.findByPk(fabricantes[i].id)
        if (!fabricante) {
            return res.status(404).json({ error: `no se encontró un fabricante con el id '${fabricantes[i].id}'` });
        }
        fabricantes[i] = fabricante
    }
    try {
        producto.addFabricantes(fabricantes)
    } catch (err) {
        const msg = `error al asignar fabricantes a un producto: '${err}'`
        console.error(msg)
        return res.status(500).json({ error: msg })
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

// elimina la asociacion de fabricantes de un producto
controller.deleteAllFabricatesDeProducto = async (req, res) => {
    const modelo = req.modelo || await Producto.findByPk(req.params.id);
    try {
        await modelo.setFabricantes([])
    } catch(e) {
        res.status(500).json({ error: `error al desasociar fabricantes de un producto: ${e}` })
        return
    }

    res.status(200).json({ message: 'OK' });
}



// asigna componentes a un producto
const associateComponenteAProductoById = async (req, res) => {
    const producto = req.modelo || await Producto.findByPk(req.params.id);

    const componentes = req.body;
    if (!Array.isArray(componentes)) {
        return res.status(500).json({ error: `se espera una lista de componentes` })
    }
    for (const i in componentes) {
        const componente = await Componente.findByPk(componentes[i].id)
        if (!componente) {
            return res.status(404).json({ error: `no se encontró un componente con el id '${componentes[i].id}'` });
        }
        componentes[i] = componente
    }

    try {
        producto.addComponentes(componentes)
    } catch (err) {
        const msg = `error al asignar componentes a un producto: '${err}'`
        console.error(msg)
        return res.status(500).json({ error: msg })
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

// elimina la asociacion de componentes de un producto
controller.deleteAllComponentesDeProducto = async (req, res) => {
    const modelo = req.modelo || await Producto.findByPk(req.params.id);
    try {
        await modelo.setComponentes([])
    } catch(e) {
        res.status(500).json({ error: `error al desasociar componentes de un producto: ${e}` })
        return
    }


    res.status(200).json({ message: 'OK' });
}


module.exports = controller