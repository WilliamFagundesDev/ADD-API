const BaseService = require('./BaseService');

class CategoriaService extends BaseService {
    constructor() {
        // 1. Nome da Tabela
        // 2. A Chave Primária (PK) - Única e isolada
        // 3. A LISTA de quem deve ser validado (Array)
        super('Categorias','CD_Categoria', ['DS_Categoria']);
    }
}

module.exports = new CategoriaService();