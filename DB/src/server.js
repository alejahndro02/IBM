const express = require('express')
const cors = require('cors')

const app = express()

const userRoutes = require('./routes/users')

app.use(cors())
app.use(express.json())


app.use('/users', userRoutes)

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'API running'
  })
})

module.exports = app