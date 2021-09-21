const express = require('express')
const router = express.Router()
const user = require('./user')
const brand = require('./brand')
const laptop = require('./laptop')

router.use("/user", user)
router.use("/brand", brand)
router.use("/laptop", laptop)

module.exports = router