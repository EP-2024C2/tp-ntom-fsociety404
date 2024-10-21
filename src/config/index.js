const {Sequelize} = require("sequelize")
const process = require('process')
const configFile = process.env.CONFIG_FILE || __dirname + '/../../config.json'
const env = process.env.NODE_ENV || 'development';
let config
try {
    config = require(configFile);
} catch(e) {
    console.error(`error al abrir archivo de configuración: ${e}`)
    process.exit(1);
}

if (!config[env]) {
    throw new Error("error al cargar archivo de configuración");
    process.exit(1);
}
config = config[env]
console.log(`Configurando BD`, config)


const sequelize = new Sequelize(config)


module.exports = sequelize
