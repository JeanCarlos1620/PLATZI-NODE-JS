require('dotenv').config();

import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
    connectionString: process.env.POSTGRES_URL,
})

const config = {
    env: process.env.NODE_ENV || 'dev',
    isProd: process.env.NODE_ENV,
    port: process.env.PORT || 3000,
    // dbUser: process.env.DB_USER,
    // dbPassword: process.env.DB_PASSWORD,
    // dbHost: process.env.DB_HOST,
    // dbName: process.env.DB_NAME,
    // dbPort: process.env.DB_PORT,
    dbEngine: process.env.DB_ENGINE, // postgress
    dbUrl: pool
}


module.exports = { config };