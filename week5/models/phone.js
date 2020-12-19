const mongoose = require('mongoose')
const phoneService = require('../services/phone-service')

const PhoneSchema = new mongoose.Schema({
    name: {
        type:String,
        default: "phone",
    },
    user: {
        type:String,
        minlength: 2,
    },
    apps: Array
})

const PhoneModel = mongoose.model('Phone',PhoneSchema)

module.exports = PhoneModel
