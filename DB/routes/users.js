const express = require('express')

const router = express.Router()


router.get('/', async (req, res) => {
  const users = await users.get()
  res.json({
    success: true,
    message: 'Done!',
    payload: {
      users
    }
  })
})

module.exports = router