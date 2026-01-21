const BaseController = require('./BaseController');
const categoriaService = require('../services/CategoriaService');

class CategoriaController extends BaseController {
    constructor() {
        super(categoriaService);
    }
}

module.exports = new CategoriaController();