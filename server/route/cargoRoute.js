const express = require('express')
const { createCargo,getAll } = require('../controllers/orderController')
const router = express.Router()

router.post('/',createCargo)
router.get('/',getAll)

module.exports = router