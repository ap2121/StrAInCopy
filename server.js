const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const db = require('./db')
const app = express()
const AppRouter = require('./routes/AppRouter')


const PORT = process.env.PORT || 3001

app.use(cors())
app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.use('/strain', AppRouter)
app.listen(PORT, () => console.log(`Server listening on Port ${PORT}`))