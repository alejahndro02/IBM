const express = require('express')
const cors = require('cors')

const app = express()

const empleadoRoutes = require('./routes/empleados/empleados')

app.use(cors())
app.use(express.json())


app.use('/empleados', empleadoRoutes)

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'API running'
  })
})

module.exports = app