const express = require("express")
const router = express.Router()
const services = require("../services")

function serverStart(req, res) {
  res.send("Server escuchando en /");
}

router.get("/", serverStart)
router.get("/cursos", services.getCursos)

module.exports = router
