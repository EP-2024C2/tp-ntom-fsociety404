const { Componente, Producto } = require('../models')

//obtener tods los componentes
const getAllComponente = async (req, res) => {
  try {
    const componentes = await Componente.findAll();
    res.status(200).json(componentes);
  } catch (error) {
    res.status(500).json({ error : error.message });
  }
}

//obtener componentes por id
const getComponente = async (req, res) => {
  const componente = await Componente.findByPk(req.params.id);
    if (!componente) {
        return res.status(404).json({ error: 'Componente no encontrado' });
    }
    res.status(200).json(componente);

}

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
        res.status(500).json({message : `error al intentar crear Componente: "${error}"`})
    }

}

//modificar los datos de un componente en particular
const updateComponente = async (req, res) => {
  const componente = await Componente.findByPk(req.params.id);
    if (!componente) {
        return res.status(404).json({ error: 'Componente no encontrado' });
    }

    const componenteActualizado = req.body;
    try {
        const resultado = await Componente.update({
            nombre: componenteActualizado.nombre,
            descripcion: componenteActualizado.descripcion
        }, {where: {id: req.params.id}})
        const componenteModificado = await Componente.findByPk(req.params.id);
        res.status(200).json(componenteModificado)

    } catch (error) {
        res.status(500).json({error : `error al intentar actualizar Componente: "${error}"`})
    }
}

//borrar un componente en particular
const deleteComponente = async (req, res) => {
  const componente = await Componente.findByPk(req.params.id);
  if (!componente) {
      return res.status(404).json({ message: 'Componente no encontrado' });
  }
  try {
      await componente.destroy({where: {id: req.params.id}});
      res.status(200).json({ message: 'OK' });
      } catch (error) {
      res.status(500).json({ error: error.message });
  }
}


// obtiene los productos de un componente
const getProductos = async (req, res) => {
    const idComponente = req.params.id
    const componente = await Componente.findByPk(idComponente, {
        include: {model: Producto, as: "Productos"}
    });
    if (!componente) {
        return res.status(404).json({ message: 'Componente no encontrado' });
    }

    res.status(200).json(componente);
}

module.exports = {getAllComponente, getComponente, addComponente, updateComponente, deleteComponente, getProductos}