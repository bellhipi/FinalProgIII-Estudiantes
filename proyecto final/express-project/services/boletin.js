
const Boletin = require("../schemas/boletin")


/* async function getNombreMateria(req, res){
    const nombreMateria = await Materia.findById(req,{_id:0, nombre:1}).exec();
    return(nombreMateria.nombre)
} 
*/

async function getFilterBoletin(req, res) {
  const arrayNotasDB = await Boletin.find({ alumnoid: req.body.id }, { _id: 0, notas: 1 }).populate('notas.materiaid').exec();
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
  const arrayAlumnosDB = await Boletin.find({ cursoid: req.body.id }, { _id: 0, ausentes: 1 }).populate('alumnoid').exec();
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
  const filter = { alumnoid: req.body.id}
  const update = req.body.update
  //console.log(filter)
  //console.log(update)
  const alumnosAusentesDB = await Boletin.findOneAndUpdate(filter, update);
//console.log(alumnosAusentesDB)
  res.send(alumnosAusentesDB);
}

module.exports = {
  getFilterBoletin: getFilterBoletin,
  getFilterAusentes: getFilterAusentes,
  updateAttendance: updateAttendance
};
