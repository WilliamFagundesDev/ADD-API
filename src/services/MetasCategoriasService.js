const BaseService = require('./BaseService');

class MetasCategoriasService extends BaseService {
    constructor() {
        // 1. Nome da tabela: 'MetasCategorias'
        // 2. Chave Primária: 'CD_MetaCategoria'
        // 3. Campos Obrigatórios na API: CD_Meta, CD_Categoria e Ano
        super(
            'MetasCategorias', 
            'CD_MetaCategoria', 
            ['CD_Meta', 'CD_Categoria', 'Ano']
        );
    }
}

module.exports = new MetasCategoriasService();