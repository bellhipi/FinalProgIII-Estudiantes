const express = require("express")
const router = express.Router()
const services = require("../services")

router.get("/cursos", services.getCursos)
router.get("/alumnos", services.getAlumnos)
router.post("/attendance", services.updateAttendance)

module.exports = router
