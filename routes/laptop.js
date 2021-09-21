const express = require('express')
const router = express.Router()
const laptop = require('../controllers/laptop')

router.post("/", laptop.create)
router.get("/", laptop.readAll)
router.get("/:id", laptop.readOne)
router.put("/:id", laptop.update)
router.delete("/:id", laptop.delete)

module.exports = router