const mssql = require('mssql');
require('dotenv').config();

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    options: {
        encrypt: true, 
        trustServerCertificate: true 
    }
};

const poolPromise = new mssql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('✅ Conectado ao SQL Server');
        return pool;
    })
    .catch(err => console.log('❌ Erro na conexão: ', err));

module.exports = { mssql, poolPromise };