/* eslint-disable comma-dangle */
/* eslint-disable semi */
const express = require('express')
const router = express.Router()

const {
  addUser,
} = require('../Controller/controller')

router.post('/add-user', addUser)

module.exports = router
