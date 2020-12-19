const mongoose = require('mongoose')
const phoneService = require('../services/phone-service')

const PhoneSchema = new mongoose.Schema({
    name: {
        type:String,
        default: "phone",
    },
    user: {
        type:mongoose.SchemaTypes.String,
        minlength: 2,
    },
    apps: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref:'Platform'
    }]
})

const PhoneModel = mongoose.model('Phone',PhoneSchema)

module.exports = PhoneModel