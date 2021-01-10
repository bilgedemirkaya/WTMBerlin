const BaseService = require('./base-service')
const PlatformModel = require('../models/socialplatform')

class PlatformService extends BaseService {
   model = PlatformModel
}

module.exports = new PlatformService()