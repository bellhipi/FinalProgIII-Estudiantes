const express = require("express")
const router = express.Router()
const services = require("../services")

router.get("/cursos", services.getCursos)
router.get("/cursosnum", services.getNum)
router.post("/cursosmaterias", services.getFilterMateria)
router.post("/cursosalumnos", services.getFilterAlumnos)
router.get("/alumnos", services.getAlumnos)
router.post("/attendance", services.updateAttendance)

module.exports = router
