const BaseController = require('./BaseController');
const metasService = require('../services/MetasService');

class MetasController extends BaseController {
    constructor() {
        super(metasService);
    }
}

module.exports = new MetasController();