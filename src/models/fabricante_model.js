'use strict';
const {  Model,  DataTypes} = require('sequelize');
const sequelize = require('../config')

class Fabricante extends Model {}

Fabricante.init({
    nombre: DataTypes.STRING,
    direccion: DataTypes.STRING,
    pathImgPerfil: DataTypes.STRING,
    numeroContacto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Fabricante',
  });



module.exports = Fabricante