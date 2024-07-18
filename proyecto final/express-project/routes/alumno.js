const express = require("express")
const router = express.Router()
const services = require("../services/alumno")

router.post("/alumnoscurso", services.getFilterAlumnos)
router.get("/alumnos", services.getAlumnos)
router.post("/alumnosalta", services.altaAlumno)
router.post("/alumnoslog", services.loginAlumno)


module.exports = router
