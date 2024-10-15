const { Componente, Producto } = require('../models')
const controller = {}

//obtener tods los componentes
const getAllComponentes = async (req, res) => {
    try {
        const componentes = await Componente.findAll();
        res.status(200).json(componentes);
    } catch (error) {
        res.status(500).json({ error : error.message });
    }
}
controller.getAllComponentes = getAllComponentes

//obtener componentes por id
const getComponenteById = async (req, res) => {
    const componente = req.modelo || await Componente.findByPk(req.params.id);
    res.status(200).json(componente);
}
controller.getComponenteById = getComponenteById

//crear un componente
const addComponente = async (req, res) => {
    const componente = req.body;
    try {
        const resultado = await Componente.create({
            nombre: componente.nombre,
            descripcion: componente.descripcion
        })
        res.status(201).send(resultado)

    } catch (error) {
        res.status(500).json({ message : `error al intentar crear Componente: "${error}"` })
    }
}
controller.addComponente = addComponente

//modificar los datos de un componente en particular
const updateComponente = async (req, res) => {
    const componenteActualizado = req.body;
    try {
        await Componente.update({
            nombre: componenteActualizado.nombre,
            descripcion: componenteActualizado.descripcion
        }, { where: { id: req.params.id } })
        const componenteModificado = await Componente.findByPk(req.params.id);
        res.status(200).json(componenteModificado)

    } catch (error) {
        res.status(500).json({ error: `error al intentar actualizar Componente: "${error}"` })
    }
}
controller.updateComponente = updateComponente

//borrar un componente en particular
const deleteComponente = async (req, res) => {
    try {
        await Componente.destroy({ where: { id: req.params.id } });
        res.status(200).json({ message: 'OK' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
controller.deleteComponente = deleteComponente

// obtiene los productos de un componente
const getAllProductosDeComponente = async (req, res) => {
    const idComponente = req.params.id
    const componente = await Componente.findByPk(idComponente, {
        include: { model: Producto, as: "Productos" }
    });
    res.status(200).json(componente);
}
controller.getAllProductosDeComponente = getAllProductosDeComponente

module.exports = controller