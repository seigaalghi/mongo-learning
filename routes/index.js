const express = require('express')
const router = express.Router()
const user = require('./user')
const brand = require('./brand')
const laptop = require('./laptop')
const checkout = require('./checkout')

router.use("/user", user)
router.use("/brand", brand)
router.use("/laptop", laptop)
router.use("/checkout", checkout)

module.exports = router