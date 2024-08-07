const express = require("express")
const router = express.Router()
const services = require("../services/boletin")

router.get('/boletin/:id', services.getFilterBoletin)
router.get('/boletinaluaus/:id', services.getFilterAlumnoAusente)
router.get('/boletinaus/:id', services.getFilterAusentes)
router.post("/boletinattendance", services.updateAttendance)
router.post("/boletinnotas", services.updateNotas)
router.post("/boletinalta", services.altaBoletin)
module.exports = router
