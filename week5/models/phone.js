const mongoose = require('mongoose')
const platformService = require('../services/platform-service')

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
        ref:'Platform',
        autopopulate:true
    }]
})

PhoneSchema.methods.downloadApp = async function (app) {
this.apps.push(app)
// console.log(app)
await this.save()
}
PhoneSchema.plugin(require('mongoose-autopopulate'))

const PhoneModel = mongoose.model('Phone',PhoneSchema)

module.exports = PhoneModel