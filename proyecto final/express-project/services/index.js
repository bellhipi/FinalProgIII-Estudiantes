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

async function updateAttendance(req, res) {
    const id = req.body.id
    const update = req.body.update
    
    const alumnosAusentesDB = await Alumno.findByIdAndUpdate(id, update);

    res.send(alumnosAusentesDB);
}

module.exports = {
    getCursos: getCursos,
    getAlumnos: getAlumnos,
    updateAttendance: updateAttendance
};
