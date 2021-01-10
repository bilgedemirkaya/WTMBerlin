const express = require('express')
const router = express.Router()

const PlatformService = require('../services/platform-service')

router.get('/all', async (req,res) => { 
    const platforms = await PlatformService.findAll()
    res.render('platform', {platforms})
})

router.get('/all/json', async (req, res) => {
    const platforms = await PlatformService.findAll()
    res.send(platforms)
})

router.get('/:id', async (req, res) => {
    const platform = await PlatformService.find(req.params.id)
    if (!platform) res.status(404)
    res.send(platform)
})

router.post('/', async (req, res) => {
    const platform = await PlatformService.add(req.body)
    res.send(platform)
})

router.delete('/:id', async (req, res) => {
  await PlatformService.del(req.params.id)
  res.send('ok')
})

module.exports = router