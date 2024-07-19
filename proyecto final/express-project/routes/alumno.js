const express = require("express")
const router = express.Router()
const services = require("../services/alumno")

router.get('/alumnos/:id', services.getAlumno)
router.get('/alumnoscurso/:id', services.getFilterAlumnos)
router.post("/alumnosalta", services.altaAlumno)
router.post("/alumnoslog", services.loginAlumno)


module.exports = router
