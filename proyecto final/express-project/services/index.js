const Curso = require("../schemas/curso")
const Alumno = require("../schemas/alumno")
const Materia = require("../schemas/materia")
const Boletin = require("../schemas/boletin")

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
    res.send(arrayNombresDB.sort());
}
/* async function getNombreMateria(req, res){
    const nombreMateria = await Materia.findById(req,{_id:0, nombre:1}).exec();
    return(nombreMateria.nombre)
} */


async function getFilterAlumnos(req, res) {
    const arrayAlumnosDB = await Alumno.find({cursoid: req.body.id},{nombre:1, dni:1}).exec();
    const arrayAlumnosOrdenados = arrayAlumnosDB.sort((a, b) => {
        const nameA = a.nombre.toUpperCase(); // ignore upper and lowercase
        const nameB = b.nombre.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });
      console.log(arrayAlumnosOrdenados)
    res.send(arrayAlumnosOrdenados);
}

async function getFilterBoletin(req, res) {
    console.log(req.body.id)

    const arrayNotasDB = await Boletin.find({});

      console.log(arrayNotasDB)
    res.send(arrayNotasDB);
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
    getNum : getNum,
    getFilterMateria : getFilterMateria,
    getFilterAlumnos : getFilterAlumnos,
    getFilterBoletin : getFilterBoletin,
    getAlumnos: getAlumnos,
    updateAttendance: updateAttendance
};
