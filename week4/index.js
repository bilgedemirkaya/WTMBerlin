const express = require('express')
const PersonService = require('./services/person-service')

const app = express()

app.set('view engine','pug')

app.get('/', (req,res) => {
  //  res.sendFile(__dirname + '/index.html')
  res.render('index')
})

app.get('/person/all', async (req,res) => {
    const people = await PersonService.findAll()
    res.send(people)
  })
  

app.listen(3000,() => {
    console.log('listening..')
})