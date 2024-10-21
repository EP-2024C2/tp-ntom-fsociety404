const { Fabricante, Producto } = require('../models')
const controller = {}

// obtiene todos los fabricantes
const getAllFabricantes = async (req, res) => {
    try {
        const fabricantes = await Fabricante.findAll();
        res.status(200).json(fabricantes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
controller.getAllFabricantes = getAllFabricantes

// obtener fabricantes por id
const getFabricanteById = async (req, res) => {
    const fabricante = req.modelo || await Fabricante.findByPk(req.params.id);
    res.status(200).json(fabricante);
}
controller.getFabricanteById = getFabricanteById

// permite crear un fabricante
const addFabricante = async (req, res) => {
    const fabricante = req.body;
    try {
        const resultado = await Fabricante.create({
            nombre: fabricante.nombre,
            direccion: fabricante.direccion,
            numeroContacto: fabricante.numeroContacto,
            pathImgPerfil: fabricante.pathImgPerfil,
        })
        res.status(201).send(resultado)

    } catch (error) {
        res.status(500).json({ error: `error al intentar crear: "${error}"` })
    }
}
controller.addFabricante = addFabricante

// permite modificar un fabricante
const updateFabricante = async (req, res) => {
    const fabricanteActualizado = req.body;
    try {
        await Fabricante.update({
            nombre: fabricanteActualizado.nombre,
            direccion: fabricanteActualizado.direccion,
            numeroContacto: fabricanteActualizado.numeroContacto,
            pathImgPerfil: fabricanteActualizado.pathImgPerfil,
        }, { where: { id: req.params.id } })
        const fabricanteModificado = await Fabricante.findByPk(req.params.id);
        res.status(200).json(fabricanteModificado)

    } catch (error) {
        res.status(500).json({ error: `error al intentar crear: "${error}"` })
    }
}
controller.updateFabricante = updateFabricante

// permite eliminar un fabricante
const deleteFabricante = async (req, res) => {
    const fabricante = req.modelo || await Fabricante.findByPk(req.params.id);
    const cantProductosAsociados = await fabricante.countProductos()
    if(cantProductosAsociados > 0) {
        res.status(400).json({ message: `no se puede eliminar un fabricante si tiene productos asociados` });
        return
    }

    try {
        await Fabricante.destroy({ where: { id: req.params.id } });
        res.status(200).json({ message: 'OK' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
controller.deleteFabricante = deleteFabricante


// obtiene los productos de un fabricante
const getAllProductosDeFabricante = async (req, res) => {
    const idFabricante = req.params.id
    const fabricante = await Fabricante.findByPk(idFabricante, {
        include: { model: Producto, as: "Productos" }
    });
    res.status(200).json(fabricante);
}
controller.getAllProductosDeFabricante = getAllProductosDeFabricante

module.exports = controller