const router = require('express').Router()
const CreateRouter = require('./CreateRouter')

router.use('/create', CreateRouter)



module.exports = router