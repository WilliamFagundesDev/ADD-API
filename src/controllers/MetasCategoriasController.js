const BaseController = require('./BaseController');
const metasCategoriasService = require('../services/MetasCategoriasService');

class MetasCategoriasController extends BaseController {
    constructor() {
        super(metasCategoriasService);
    }
}

module.exports = new MetasCategoriasController();