const { Producto, Fabricante, Componente } = require('../models')

//obtener tods los productos
const getAllProducto = async (req, res) => {
    try {
        const productos = await Producto.findAll();
        res.status(200).json(productos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//obtener productos por id
const getProducto = async (req, res) => {
    const producto = req.modelo || await Producto.findByPk(req.params.id);

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
        res.status(500).json({ message: `error al intentar crear Producto: "${error}"` })
    }

}

//modificar los datos de un producto en particular
const updateProducto = async (req, res) => {
    const productoActualizado = req.body;
    try {
        const resultado = await Producto.update({
            nombre: productoActualizado.nombre,
            descripcion: productoActualizado.descripcion
        }, { where: { id: req.params.id } })
        const productoModificado = await Producto.findByPk(req.params.id);
        res.status(200).json(productoModificado)

    } catch (error) {
        res.status(500).json({ error: `error al intentar actualizar Producto: "${error}"` })
    }
}

//borrar un producto en particular
const deleteProducto = async (req, res) => {
    const producto = req.modelo || await Producto.findByPk(req.params.id);
    try {
        await producto.destroy({ where: { id: req.params.id } });
        res.status(200).json({ message: 'OK' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// asigna fabricante a un producto
const addFabricantes = async (req, res) => {
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

// obtiene los fabricantes de un producto
const getFabricantes = async (req, res) => {
    const idProducto = req.params.id
    const producto = await Producto.findByPk(idProducto, {
        include: { model: Fabricante, as: "Fabricantes" }
    });

    res.status(200).json(producto);
}


// asigna componentes a un producto
const addComponentes = async (req, res) => {
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

// obtiene los componentes de un producto
const getComponentes = async (req, res) => {
    const idProducto = req.params.id
    const producto = await Producto.findByPk(idProducto, {
        include: { model: Componente, as: "Componentes" }
    });

    res.status(200).json(producto);
}

module.exports = {
    getAllProducto,
    getProducto,
    addProducto,
    updateProducto,
    deleteProducto,
    addFabricantes,
    getFabricantes,
    addComponentes,
    getComponentes,

}