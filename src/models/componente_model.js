'use strict';

const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config')

class Componente extends Model {}

Componente.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Componente',
  });



module.exports = Componente

