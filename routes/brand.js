const express = require('express')
const router = express.Router()
const brand = require('../controllers/brand')

router.post("/", brand.create)
router.get("/", brand.readAll)
router.get("/:keyword", brand.search)
router.put("/:sembarang", brand.update)
router.delete("/:id", brand.delete)

module.exports = router