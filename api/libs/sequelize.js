const { Sequelize } = require("sequelize");
const { config } = require('../config/config');
const setupModels = require('../db/models');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

// const sequelize = new Sequelize(URI, {
//     dialect: 'postgres',
//     logging: console.log,

// });

// setupModels(sequelize);

// se empieza a leer los modelos y crear las tablas 
// no se recomienda usarlo en produccion
// sequelize.sync();

const options = {
    dialect: config.dbEngine,
    logging: config.isProd ? false : console.log,
};

if (config.isProd) {
    options.dialectModule = require('pg');
}

const sequelize = new Sequelize(URI, options)


module.exports = sequelize;