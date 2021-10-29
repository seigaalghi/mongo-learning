const express = require('express')
const router = express.Router()
const checkout = require('../controllers/checkout')

router.get("/:productId", checkout.checkout)

module.exports = router