const express = require('express')
const router = express.Router()
const empleado  = require('../../usescases/empleados')

router.get('/', async (req, res) => {
  const empleados = await empleado.get()
  res.json({
    success: true,
    message: 'Done!',
    payload: {
      empleados
    }
  })
})

module.exports = router