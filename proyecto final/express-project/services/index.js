const Curso = require("../schemas/cursos")

async function getCursos(req, res) {
    const arrayCursosDB = await Curso.find({});
    res.send(arrayCursosDB);
}

module.exports = {
    getCursos: getCursos
};
