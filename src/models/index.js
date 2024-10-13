'use strict';


const Fabricante = require('./fabricante_model')
const Componente = require('./componente_model')
const Producto = require('./producto_model')


Producto.belongsToMany(Fabricante, { through: 'ProductoFabricante' });
Producto.belongsToMany(Componente, { through: 'ProductoComponente' });

Fabricante.belongsToMany(Producto, { through: 'ProductoFabricante' });
Componente.belongsToMany(Producto, { through: 'ProductoComponente' });

module.exports = { Producto, Fabricante, Componente};

