'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config')

class Fabricante extends Model { }

Fabricante.init({
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pathImgPerfil: {
        type: DataTypes.STRING,
        allowNull: false
    },
    numeroContacto: DataTypes.STRING
}, {
    sequelize,
    modelName: 'Fabricante',
    timestamps: false,
});



module.exports = Fabricante