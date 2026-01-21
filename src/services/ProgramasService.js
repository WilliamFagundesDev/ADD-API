const BaseService = require('./BaseService');

class ProgramasService extends BaseService {
    constructor() {
        // 1. Nome da Tabela
        // 2. A Chave Primária (PK) - Única e isolada
        // 3. A LISTA de quem deve ser validado (Array)
        super('Programas','CD_Programa', ['DS_Programa']);
    }
}

module.exports = new ProgramasService();