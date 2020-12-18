const mongoose = require('mongoose')

const PersonSchema = new mongoose.Schema({
    name: String,
    posts: Array
})

const PersonModel = mongoose.model('Person',PersonSchema)

module.exports = PersonModel