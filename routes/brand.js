const express = require('express')
const router = express.Router()
const brand = require('../controllers/brand')

router.post("/", brand.create)
router.get("/", brand.readAll)

module.exports = router