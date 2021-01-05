const mongoose = require('mongoose')
async function main () {
    mongoose.connect(process.env.MONGODB_CONNECTION_STRING || 'mongodb://localhost:27017/wtm', {useNewUrlParser: true,useUnifiedTopology: true}, (err) => {
        if(!err) {console.log('success')}
        else { console.log("error")}
    })       
}
main()