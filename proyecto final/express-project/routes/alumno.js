const express = require("express")
const router = express.Router()
const services = require("../services/alumno")

router.post("/alumnoscurso", services.getFilterAlumnos)
router.get("/alumnos", services.getAlumnos)

module.exports = router
