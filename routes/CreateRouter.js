const router = require('express').Router()
const controller = require('../controllers/CreateController')
router.get('/test', controller.testFunction)

module.exports = router
