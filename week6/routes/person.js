const express = require('express')
const router = express.Router()

const PersonService = require('../services/person-service')

router.get('/all', async (req,res) => { 
    const people = await PersonService.findAll()
    res.render('person', {people})
  })

router.get('/all/json', async (req, res) => {
    const people = await PersonService.findAll()
    res.send(people)
  })

router.delete('/all/delete', async (req,res) => { 
    await PersonService.deleteAll()
    res.send('ok')
  })

router.get('/:id', async (req, res) => {
    const user = await PersonService.find(req.params.id)
    if (!user) {
      res.status(404)
    }
    res.send(user)
  })

router.get('/:id/json', async (req, res) => {
    const user = await PersonService.find(req.params.id)
    if (!user) res.status(404)
    res.send(user)
  })

router.post('/', async (req, res) => {
    const user = await PersonService.add(req.body)
    res.send(user)
  })

router.delete('/:id', async (req, res) => {
  await PersonService.del(req.params.id)
  res.send('ok')
})

// share a post from a particular person
// example: axios.post('/person/2/post',{post:'ss'}).then(console.log)
router.post('/:id/post', async (req, res) => {
  const person = await PersonService.find(req.params.id)
  person.post(req.body.post)
  await PersonService.update(req.params.id)
  res.send('ok')
})

module.exports = router