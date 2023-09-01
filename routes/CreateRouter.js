const router = require('express').Router()
const controller = require('../controllers/CreateController')
router.get('/desc', controller.newDesc)

module.exports = router
