const express = require('express')
const router = express.Router()
const brand = require('../controllers/brand')
const passport = require('passport')

router.post("/", passport.authenticate('jwt', { session : false }), brand.create)
router.get("/", brand.readAll)
router.get("/:keyword", brand.search)

module.exports = router