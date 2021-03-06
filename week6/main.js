
const PersonService = require('./services/person-service')
const PhoneService = require('./services/phone-service')
const PlatformService = require('./services/platform-service')
const Phone = require('./models/phone')
const SocialPlatform = require('./models/socialplatform')
const Person = require('./models/person')


async function main() {

    twitter = new SocialPlatform("twitter")
    instagram = new SocialPlatform("instagram")

    bilge = new Person("bilge")
    mimi = new Person("mimi")

    myphone = new Phone(bilge)
    mimisPhone = new Phone(mimi)
    myphone.downloadApp(instagram)

    console.log(myphone)

    // save it to database
   /*  await PersonService.add(bilge)
    await PersonService.add(mimi)
    await PhoneService.add(myphone)
    await PhoneService.add(mimisPhone)
    await PlatformService.add(twitter)   
    await PlatformService.add(instagram)    */
    //console.log(chalk.blue('Chalk was here'))
     

/*    const phone = await PhoneService.findAll()
   console.log(phone)

   const ppl = await PersonService.find(1)
   console.log(ppl)

   await PlatformService.del(1)
   const pl = await PlatformService.findAll()
   console.log(pl) */
}
main()