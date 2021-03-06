const express = require('express')
const bodyParser = require('body-parser')


const app = express()

app.use(bodyParser.json()) // you do it only once // parse the body as a JSON object
app.use('/phone',require('./routes/phone'))
app.use('/person',require('./routes/person'))

app.set('view engine','pug') // you do it only once 
app.get('/', (req,res) => {
  //  res.sendFile(__dirname + '/index.html')
  res.render('index')
})

app.listen(3000,() => {
    console.log('listening..')
})