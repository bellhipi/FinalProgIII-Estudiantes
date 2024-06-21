const express = require("express")
const router = express.Router()
const services = require("../services/boletin")

router.post("/boletin", services.getFilterBoletin)

module.exports = router
