const BaseController = require('./BaseController');
const programasService = require('../services/ProgramasService');

class ProgramasController extends BaseController {
    constructor() {
        super(programasService);
    }
}

module.exports = new ProgramasController();