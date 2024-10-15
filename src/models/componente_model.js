'use strict';

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config')

class Componente extends Model { }

Componente.init({
	nombre: {
		type: DataTypes.STRING,
		allowNull: false
	},
	descripcion: DataTypes.TEXT
}, {
	sequelize,
	modelName: 'Componente',
	timestamps: false
});



module.exports = Componente

