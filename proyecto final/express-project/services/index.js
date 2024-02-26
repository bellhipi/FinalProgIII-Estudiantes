const Curso = require("../schemas/cursos")
const Alumno = require("../schemas/alumnos")

async function getCursos(req, res) {
    const arrayCursosDB = await Curso.find({});
    res.send(arrayCursosDB);
}

async function getAlumnos(req, res) {
    const arrayAlumnosDB = await Alumno.find({});
    res.send(arrayAlumnosDB);
}

module.exports = {
    getCursos: getCursos,
    getAlumnos: getAlumnos
};
