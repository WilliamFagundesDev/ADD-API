const BaseService = require('./BaseService');

class EmpregadoService extends BaseService {
    constructor() {
        // 1. Nome da Tabela
        // 2. A Chave Primária (PK) - Única e isolada
        // 3. A LISTA de quem deve ser validado 
        super('Empregados', 'NR_Matricula', ['NM_Pessoa','CD_Pessoa']);
    }
}

module.exports = new EmpregadoService();