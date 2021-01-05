const mongoose = require('mongoose')

const PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true,
        minlength:3
    },
    posts: []
})

PersonSchema.methods.post = async function(tweet) {
    this.posts.push(tweet)
    console.log(this.name,"just posted this:", tweet)
    await this.save()
}
const PersonModel = mongoose.model('Person',PersonSchema)

module.exports = PersonModel