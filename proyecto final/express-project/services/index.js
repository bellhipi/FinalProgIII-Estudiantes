const Curso = require("../schemas/curso")
const Alumno = require("../schemas/alumno")
const Materia = require("../schemas/materia")

async function getCursos(req, res) {
    const arrayCursosDB = await Curso.find({});
    res.send(arrayCursosDB);
}

async function getNum(req, res) {
    const arrayNumCursosDB = await Curso.find({},'id').exec();
    const arrayNumOrdenados = arrayNumCursosDB.sort((firstItem, secondItem) => firstItem.id - secondItem.id)
    res.send(arrayNumOrdenados);
}

async function getFilterMateria(req, res) {
    //const arrayMateriasDB = await Curso.find({id: req.body.id},{_id:0, materias:1}).exec();
    const arrayMateriasDB = await Curso.find({id: req.body.id},{_id:0, materias:1}).populate('materias').exec();
    const arrayMaterias = arrayMateriasDB[0].materias
    const arrayNombresDB = []
    for( var i = 0; i<arrayMaterias.length; i++){
        arrayNombresDB[i]=arrayMaterias[i].nombre
    }
    //arrayMaterias.forEach(element => { arrayNombresDB[index] = element.nombre});
    console.log(arrayNombresDB);
    res.send(arrayNombresDB);
}

/* async function getNombreMateria(req, res){
    const nombreMateria = await Materia.findById(req,{_id:0, nombre:1}).exec();
    return(nombreMateria.nombre)
} */

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
    getNum : getNum,
    getFilterMateria : getFilterMateria,
    getAlumnos: getAlumnos,
    updateAttendance: updateAttendance
};
