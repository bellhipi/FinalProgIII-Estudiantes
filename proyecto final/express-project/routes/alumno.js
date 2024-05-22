const express = require("express")
const router = express.Router()
const services = require("../services/alumno")

router.post("/cursosalumnos", services.getFilterAlumnos)
router.get("/alumnos", services.getAlumnos)
router.post("/attendance", services.updateAttendance)

module.exports = router
