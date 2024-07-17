const Boletin = require("../schemas/boletin")
const Curso = require("../schemas/curso")
const Alumno = require("../schemas/alumno")

/* async function getNombreMateria(req, res){
    const nombreMateria = await Materia.findById(req,{_id:0, nombre:1}).exec();
    return(nombreMateria.nombre)
} 
*/

async function getFilterBoletin(req, res) {
  const arrayNotasDB = await Boletin.find({ alumnoid: req.body.idalu }, { _id: 0, notas: 1 }).populate('notas.materiaid').exec();
  const notas = arrayNotasDB[0].notas

  const arrayNotas = []

  for (var i = 0; i < notas.length; i++) {
    arrayNotas[i] = {
      key: notas[i].materiaid._id,
      nombre: notas[i].materiaid.nombre,
      numero: notas[i].nota
    }
  }

  const arrayNotasOrdenadas = arrayNotas.sort((a, b) => {
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

  res.send(arrayNotasOrdenadas);
}

async function getFilterAusentes(req, res) {
  //  const arrayAlumnosDB = await Boletin.find({cursoid: req.body.id},{_id:0, ausentes:1}).populate('alumnoid').exec();
  //const arrayAlumnosDB = await Boletin.find({ cursoid: req.body.id }, { _id: 0, ausentes: 1 }).populate('alumnoid').populate({ path: 'cursoid', select: 'id' }).exec();
  const arrayAlumnosDB = await Boletin.find({ cursoid: req.body.idcur }, { _id: 0, ausentes: 1 }).populate('alumnoid').exec();
  const arrayAusentes = []
  for (var i = 0; i < arrayAlumnosDB.length; i++) {
    arrayAusentes[i] = {
      _id: arrayAlumnosDB[i].alumnoid._id,
      nombre: arrayAlumnosDB[i].alumnoid.nombre,
      dni: arrayAlumnosDB[i].alumnoid.dni,
      curso: arrayAlumnosDB[i].alumnoid.cursoid,
      ausentes: arrayAlumnosDB[i].ausentes
    }
  }


  const arrayAusentesOrdenados = arrayAusentes.sort((a, b) => {
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
  res.send(arrayAusentesOrdenados);
}

async function updateAttendance(req, res) {
  const filter = { alumnoid: req.body.idalu }
  const update = req.body.update
  const alumnosAusentesDB = await Boletin.findOneAndUpdate(filter, update);
  res.send(alumnosAusentesDB);
}

async function altaBoletin(req, res) {
  const idAlumno = await Alumno.find({ dni: req.body.values.id }, '_id').populate('cursoid').exec();

  const arrayNotas = []
  for (var i = 0; i < idAlumno[0].cursoid.materias.length; i++) {
    arrayNotas[i] = {
      materiaid: idAlumno[0].cursoid.materias[i],
      nota: 0,
    }
  }

  const newBole = {
    cursoid: idAlumno[0].cursoid._id,
    ausentes: 0,
    notas: arrayNotas,
    alumnoid: idAlumno[0]._id,
  };
  
  await new Boletin(newBole).save();

  console.log(newBole)
  res.send(newBole);
}

module.exports = {
  getFilterBoletin: getFilterBoletin,
  getFilterAusentes: getFilterAusentes,
  updateAttendance: updateAttendance,
  altaBoletin: altaBoletin
};
