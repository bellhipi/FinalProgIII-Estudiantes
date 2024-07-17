const express = require("express")
const router = express.Router()
const services = require("../services/docente")

router.post("/docentesalta", services.altaDocente)

module.exports = router
