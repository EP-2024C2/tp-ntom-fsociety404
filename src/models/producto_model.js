'use strict';

const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config')

class Producto extends Model {}

Producto.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    precio: DataTypes.FLOAT,
    pathImg: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Producto',
  });

module.exports = Producto

