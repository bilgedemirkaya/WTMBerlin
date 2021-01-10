const BaseService = require('./base-service')
const PersonModel = require('../models/person')

class PersonService extends BaseService {
   
    model = PersonModel 
    // translates to this 
  /*   constructor() {
        super(PersonModel)
    } */
}

module.exports = new PersonService()