const BaseService = require('./BaseService');

class MetasService extends BaseService {
    constructor() {
        super('Metas','CD_Meta', ['CD_TipoMeta','DS_Meta']);
    }
}

module.exports = new MetasService();