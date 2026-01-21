const { poolPromise, mssql } = require('../config/database');

class BaseService {
    constructor(tableName, primaryKey, requiredFields = []) {
        this.tableName = tableName;
        this.primaryKey = primaryKey;
        this.requiredFields = requiredFields;
    }

    async getAll() {
        const pool = await poolPromise;
        const result = await pool.request().query(`SELECT * FROM ${this.tableName}`);
        return result.recordset;
    }

    async getById(id) {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('id', mssql.Int, id)
            .query(`SELECT * FROM ${this.tableName} WHERE ${this.primaryKey} = @id`);
        return result.recordset[0];
    }

    // O método de Insert aqui seria dinâmico baseado no objeto recebido
    async create(data) {
        const pool = await poolPromise;
        const keys = Object.keys(data);
        const values = keys.map(key => `@${key}`).join(', ');
        const columns = keys.join(', ');

        const request = pool.request();
        keys.forEach(key => request.input(key, data[key]));

        const query = `INSERT INTO ${this.tableName} (${columns}) VALUES (${values})`;
        return await request.query(query);
    }

    async update(id, data) {
        const pool = await poolPromise;
        const keys = Object.keys(data);
        
        // Monta a string: "Coluna1 = @Coluna1, Coluna2 = @Coluna2"
        const setQuery = keys.map(key => `${key} = @${key}`).join(', ');

        const request = pool.request();
        request.input('id', mssql.Int, id); // Define o ID para o WHERE
        
        keys.forEach(key => request.input(key, data[key]));

        const query = `UPDATE ${this.tableName} SET ${setQuery} WHERE ${this.primaryKey} = @id`;
        return await request.query(query);
    }

    async delete(id) {
        const pool = await poolPromise;
        return await pool.request()
            .input('id', mssql.Int, id)
            .query(`DELETE FROM ${this.tableName} WHERE ${this.primaryKey} = @id`);
    }
}

module.exports = BaseService;