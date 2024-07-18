const express = require("express")
const router = express.Router()
const services = require("../services/alumno")

//router.get("/alumnos", services.getAlumno)
//router.get('/:id', getUserById)
router.get('/alumnos/:id', services.getAlumno)
router.post("/alumnoscurso", services.getFilterAlumnos)
router.post("/alumnosalta", services.altaAlumno)
router.post("/alumnoslog", services.loginAlumno)


module.exports = router
