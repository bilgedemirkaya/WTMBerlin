const express = require('express')
const bodyParser = require('body-parser')

const PersonService = require('./services/person-service')
const PhoneService = require('./services/phone-service')
const PlatformService = require('./services/platform-service')

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
    if (!user) {
      res.status(400).json({msg: `no person with the id of ${req.params.id}`})
    }
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

// share a post from a particular person
// example: axios.post('/person/2/post',{post:'ss'}).then(console.log)
app.post('/person/:id/post', async (req, res) => {
  const person = await PersonService.find(req.params.id)
  if (!person) return
  const { post } = req.body;
  person.post(post)
  console.log(post)
  await PersonService.update(person)
  res.redirect(`/person/${req.params.id}`)
})

app.get('/phone/all', async (req,res) => { 
  const phones = await PhoneService.findAll()
  res.render('phone', {phones})
})

app.get('/phone/:id', async (req, res) => {
  const phone = await PhoneService.find(req.params.id)
  if (!phone) {
    res.status(400).json({msg: `no person with the id of ${req.params.id}`})
  }
  res.send(phone)
})

app.post('/phone', async (req,res) => {
  const phone = await PhoneService.add(req.body)
  res.send(phone)
})

app.delete('/phone/:id', async (req, res) => {
  await PhoneService.del(req.params.id)
  res.send('ok')
})

// download particular app to phone
// axios.post('/phone/4/download',{app:'Facebook'}).then(console.log)
app.post('/phone/:id/download', async (req, res) => {
  const phone = await PhoneService.find(req.params.id)
  if (!phone) return
  const { app } = req.body
  phone.downloadApp(app)
  await PhoneService.update(phone)
  res.redirect(`/person/${req.params.id}`)
})

app.listen(3000,() => {
    console.log('listening..')
})