const BaseService = require('./base-service')
const PlatformModel = require('../models/socialplatform')

class PlatformService extends BaseService {
    constructor() {
        super(PlatformModel, `${__dirname}/../platform-database.json`)
    }
}

module.exports = new PlatformService()