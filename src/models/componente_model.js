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

/*const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Componente extends Model {

    static associate(models) {
      
    }
  }
  Componente.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Componente',
  });
  return Componente;
};
*/
