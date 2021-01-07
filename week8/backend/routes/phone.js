const express = require('express')
const router = express.Router()

const PhoneService = require('../services/phone-service')
const DownloadService = require('../services/download-service')


router.get('/all', async (req,res) => { 
    const phones = await PhoneService.findAll()
    res.render('phone', {phones})
  })

router.get('/all/json', async (req, res) => {
    const phones = await PhoneService.findAll()
    res.send(phones)
})

router.get('/:id', async (req, res, next) => {
  try {
    const phone = await PhoneService.find(req.params.id)
    if (!phone) res.status(404)
    res.send(phone)  
  }
  catch (error) {
    next(error);
  }
})
  
router.post('/', async (req,res) => {
    const phone = await PhoneService.add(req.body)
    res.send(phone)
  })

router.delete('/all/delete', async (req,res) => { 
  await PhoneService.deleteAll()
  res.send('ok')
})

router.delete('/:id', async (req, res) => {
    await PhoneService.del(req.params.id)
    res.send('ok')
  })
  
  // download particular app to phone
  // axios.post('/phone/5fddd86eaf20eb0fe8175c4c/download', { app : "5fddfefc4fbd19494493cd71" }).then(console.log)
router.post('/:id/download', async (req, res) => {
    const phone = await PhoneService.find(req.params.id)
    if (!phone) res.status(404)
    const { app } = req.body
    await DownloadService.downloadApp(phone,app)
    await PhoneService.update(phone)
    res.send('ok')
})

module.exports = router