const BaseService = require('./base-service')
const PhoneModel = require('../models/phone')
const platformService = require('../services/platform-service')

class DownloadService extends BaseService {
    model = PhoneModel

    async downloadApp(phone, app){
        const socialApp = await platformService.find(app)
        phone.apps.push(app)
        socialApp.users.push(phone)
    
        await phone.save()
        await socialApp.save()
    }
   
}

module.exports = new DownloadService()