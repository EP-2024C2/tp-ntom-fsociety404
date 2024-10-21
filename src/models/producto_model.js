'use strict';

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config')

class Producto extends Model { }

Producto.init({
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: DataTypes.TEXT,
    precio: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    pathImg: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'Producto',
    timestamps: false
});

module.exports = Producto

