const express = require('express')
const bodyParser = require('body-parser')

const PersonService = require('./services/person-service')
const PhoneService = require('./services/phone-service')

const app = express()

app.use(bodyParser.json()) // you do it only once // parse the body as a JSON object
app.set('view engine','pug') // you do it only once 

app.get('/', (req,res) => {
  //  res.sendFile(__dirname + '/index.html')
  res.render('index')
})

app.get('/person/all', async (req,res) => { 
    const people = await PersonService.findAll()
    res.render('person', {people})
  })

app.get('/person/:id', async (req, res) => {
    const user = await PersonService.find(req.params.id)
    res.send(user)
  })

app.post('/person', async (req, res) => {
    const user = await PersonService.add(req.body)
    res.send(user)
  })

app.delete('/person/:id', async (req, res) => {
  await PersonService.del(req.params.id)
  res.send('ok')
})

app.get('/phone/all', async (req,res) => { 
  const phones = await PhoneService.findAll()
  res.render('phone', {phones})
})

app.post('/phone', async (req,res) => {
  const phone = await PhoneService.add(req.body)
  res.send(phone)
})

app.delete('/phone/:id', async (req, res) => {
  await PhoneService.del(req.params.id)
  res.send('ok')
})

app.listen(3000,() => {
    console.log('listening..')
})