const { config } = require('../config/config');

// const USER = encodeURIComponent(config.dbUser);
// const PASSWORD = encodeURIComponent(config.dbPassword);
// const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

// module.exports = {
//     development: {
//         url: URI,
//         dialect: 'postgres',
//     },
//     production: {
//         url: URI,
//         dialect: 'postgres',
//     }
// };

module.exports = {
    development: {
        url: config.dbUrl,
        dialect: config.dbEngine
    },
    production: {
        url: config.dbUrl,
        dialect: config.dbEngine, // postgres,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            }
        }
    }
}