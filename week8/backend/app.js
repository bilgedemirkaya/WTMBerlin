const express = require('express')
const bodyParser = require('body-parser')
require('./mongo-connection')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(bodyParser.json()) // you do it only once // parse the body as a JSON object
app.use('/phone',require('./routes/phone'))
app.use('/platform',require('./routes/platform'))

app.set('view engine','pug') // you do it only once 


app.get('/', (req,res) => {
  //  res.sendFile(__dirname + '/index.html')
  res.render('index')
})

module.exports = app