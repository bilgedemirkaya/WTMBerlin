const express = require('express')
const router = express.Router()

const PhoneService = require('../services/phone-service')

router.get('/all', async (req,res) => { 
    const phones = await PhoneService.findAll()
    res.render('phone', {phones})
  })
  
router.get('/:id', async (req, res) => {
    const phone = await PhoneService.find(req.params.id)
    if (!phone) {
      res.status(400).json({msg: `no person with the id of ${req.params.id}`})
    }
    res.send(phone)
  })
  
router.post('/', async (req,res) => {
    const phone = await PhoneService.add(req.body)
    res.send(phone)
  })
  
router.delete('/:id', async (req, res) => {
    await PhoneService.del(req.params.id)
    res.send('ok')
  })
  
  // download particular app to phone
  // axios.post('/phone/4/download',{app:'Facebook'}).then(console.log)
router.post('/:id/download', async (req, res) => {
    const phone = await PhoneService.find(req.params.id)
    if (!phone) return
    const { app } = req.body
    phone.downloadApp(app)
    await PhoneService.update(phone)
    res.redirect(`/${req.params.id}`)
})

module.exports = router