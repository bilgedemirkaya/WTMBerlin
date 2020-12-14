const Phone = require('./models/phone')
const SocialPlatform = require('./models/socialplatform')
const Person = require('./models/person')

const PersonService = require('./services/person-service')
const PhoneService = require('./services/phone-service')
const PlatformService = require('./services/platform-service')


async function main() {

   /*  twitter = new SocialPlatform("twitter")
    instagram = new SocialPlatform("instagram")

    bilge = new Person("bilge")
    mimi = new Person("mimi")

    myphone = new Phone(bilge)
    mimisPhone = new Phone(mimi)
 */

    // save it to database
  /*   await PersonService.add(bilge)
    await PhoneService.add(myphone)
    await PlatformService.add(twitter)   
    await PlatformService.add(instagram)   */
    //console.log(chalk.blue('Chalk was here'))
    

   const phone = await PhoneService.findAll()
   console.log(phone)

   const ppl = await PersonService.find(1)
   console.log(ppl)

   await PlatformService.del(1)
   const pl = await PlatformService.findAll()
   console.log(pl)
}
main()