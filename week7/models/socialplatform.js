const mongoose = require('mongoose')

const PlatformSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
        minlength:3
    },
    users: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Phone',
        autopopulate:true      
    }],
    posts: Array
})

PlatformSchema.plugin(require('mongoose-autopopulate'))

const PlatformModel = mongoose.model('Platform',PlatformSchema)

module.exports = PlatformModel
