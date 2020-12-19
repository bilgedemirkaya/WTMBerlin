const mongoose = require('mongoose')

const PlatformSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
        minlength:3
    },
    users: Array,
    posts: Array
})

const PlatformModel = mongoose.model('Platform',PlatformSchema)

module.exports = PlatformModel
