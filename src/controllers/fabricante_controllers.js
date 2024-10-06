const {Fabricante} = require('../models')

// permite crear un fabricante
const addFabricante = (req, res)=>{
    res.status(200).send("ok")
}


// obtiene los datos de un fabricante
const getFabricante = (req, res)=>{
    res.status(200).send("ok")
}


// obtiene todos los fabricantes
const getAllFabricante = (req, res)=>{
    res.status(200).send("ok")
}


// permite eliminar un fabricante
const deleteFabricante = (req, res)=>{
    res.status(200).send("ok")
}

// permite modificar un fabricante
const updateFabricante = (req, res)=>{
    res.status(200).send("ok")
}


module.exports = {addFabricante, getFabricante, getAllFabricante, deleteFabricante, updateFabricante}


