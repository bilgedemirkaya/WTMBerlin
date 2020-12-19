const BaseService = require('./base-service')
const PhoneModel = require('../models/phone')

class PhoneService extends BaseService {
    model = PhoneModel
/*     constructor() {
        super(PhoneModel)
    } */
}

module.exports = new PhoneService()