const express = require("express")
const router = express.Router()
const services = require("../services/boletin")

router.post("/boletin", services.getFilterBoletin)
router.post("/boletinaus", services.getFilterAusentes)
router.post("/attendance", services.updateAttendance)
router.post("/boletinalta", services.altaBoletin)
module.exports = router
