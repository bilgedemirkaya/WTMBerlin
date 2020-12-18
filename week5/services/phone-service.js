const BaseService = require('./base-service')
const PhoneModel = require('../models/phone')

class PhoneService extends BaseService {
    constructor() {
        super(PhoneModel, `${__dirname}/../phone-database.json`)
    }
}

module.exports = new PhoneService()