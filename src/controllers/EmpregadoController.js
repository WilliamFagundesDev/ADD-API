const BaseController = require('./BaseController');
const empregadoService = require('../services/EmpregadoService');

class EmpregadoController extends BaseController {
    constructor() {
        super(empregadoService);
    }
}

module.exports = new EmpregadoController();