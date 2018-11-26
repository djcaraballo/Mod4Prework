const express = require('express');
const router = express.Router();

router.use((request, response, next) => {
  console.log('Time: ', Date.now())
  next()
})

router.get('/sunsets', (request, response) => {
  response.send('Sunsets')
})

module.exports = router
