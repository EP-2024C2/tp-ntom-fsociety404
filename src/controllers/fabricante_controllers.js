const { Fabricante } = require('../models')

// permite crear un fabricante
const addFabricante = async (req, res) => {
    const fabricante = req.body;
    try {
        const resultado = await Fabricante.create({
            nombre: fabricante.nombre,
            direccion: fabricante.direccion,
            nroContacto: fabricante.nroContacto,
            pathImgPerfil: fabricante.pathImgPerfil,
        })
        res.status(201).send(resultado)

    } catch (error) {
        res.status(500).json({message : `error al intentar crear: "${error}"`})
    }
}


// obtiene los datos de un fabricante
const getFabricante = async (req, res) => {

    const fabricante = await Fabricante.findByPk(req.params.id);
    if (!fabricante) {
        return res.status(404).json({ message: 'Fabricante no encontrado' });
    }
    res.status(200).json(fabricante);
}



// obtiene todos los fabricantes
const getAllFabricante = async (req, res) => {
    try {
        const fabricantes = await Fabricante.findAll();
        res.status(200).json(fabricantes);
      } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// permite eliminar un fabricante
const deleteFabricante = async (req, res) => {
    const fabricante = await Fabricante.findByPk(req.params.id);
    if (!fabricante) {
        return res.status(404).json({ message: 'Fabricante no encontrado' });
    }
    try {
        await Fabricante.destroy({where: {id: req.params.id}});
        res.status(200).json({ message: 'OK' });
        } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// permite modificar un fabricante
const updateFabricante = async (req, res) => {
    const fabricante = await Fabricante.findByPk(req.params.id);
    if (!fabricante) {
        return res.status(404).json({ message: 'Fabricante no encontrado' });
    }

    const fabricanteActualizado = req.body;
    try {
        const resultado = await Fabricante.update({
            nombre: fabricanteActualizado.nombre,
            direccion: fabricanteActualizado.direccion,
            nroContacto: fabricanteActualizado.nroContacto,
            pathImgPerfil: fabricanteActualizado.pathImgPerfil,
        }, {where: {id: req.params.id}})
        res.status(200).send(resultado)

    } catch (error) {
        res.status(500).json({message : `error al intentar crear: "${error}"`})
    }

}


module.exports = { addFabricante, getFabricante, getAllFabricante, deleteFabricante, updateFabricante }


