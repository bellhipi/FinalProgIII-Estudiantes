const express = require("express")
const router = express.Router()
const services = require("../services/docente")

router.post("/docentesalta", services.altaDocente)
router.post("/docenteslog", services.loginDocente)

module.exports = router
