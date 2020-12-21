const BaseService = require('./base-service')
const PlatformModel = require('../models/socialplatform')

class PlatformService extends BaseService {
   model = PlatformModel
    /*  constructor() {
        super(PlatformModel)
    } */
}

module.exports = new PlatformService()