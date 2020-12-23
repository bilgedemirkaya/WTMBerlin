const BaseService = require('./base-service')
const PhoneModel = require('../models/phone')
const platformService = require('../services/platform-service')

class PhoneService extends BaseService {
    model = PhoneModel
}

module.exports = new PhoneService()