const express = require("express")
const router = express.Router()
const services = require("../services/curso")

router.get("/cursos", services.getCursos)
router.get("/cursosnum", services.getNum)
router.post("/cursosmaterias", services.getFilterMateria)

module.exports = router
