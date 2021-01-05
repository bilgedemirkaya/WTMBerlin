const BaseService = require('./base-service')
const PhoneModel = require('../models/phone')
const platformService = require('./platform-service')

class PhoneService extends BaseService {
    model = PhoneModel
}

module.exports = new PhoneService()