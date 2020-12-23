const BaseService = require('./base-service')
const platformService = require('../services/platform-service')

class DownloadService extends BaseService {
    async downloadApp(phone, app){
        const socialApp = await platformService.find(app)
        phone.apps.push(app)
        socialApp.users.push(phone)
        
        await phone.save()
        await socialApp.save()
    }
   
}

module.exports = new DownloadService()