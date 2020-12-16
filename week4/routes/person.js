const express = require('express')
const router = express.Router()

const PersonService = require('../services/person-service')

router.get('/all', async (req,res) => { 
    const people = await PersonService.findAll()
    res.render('person', {people})
  })

router.get('/:id', async (req, res) => {
    const user = await PersonService.find(req.params.id)
    if (!user) {
      res.status(400).json({msg: `no person with the id of ${req.params.id}`})
    }
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
  if (!person) return
  const { post } = req.body;
  person.post(post)
  console.log(post)
  await PersonService.update(person)
  res.redirect(`/${req.params.id}`)
})

module.exports = router