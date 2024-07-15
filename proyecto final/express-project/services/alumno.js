const Alumno = require("../schemas/alumno")
const Curso = require("../schemas/curso")

async function getFilterAlumnos(req, res) {
  const arrayAlumnosDB = await Alumno.find({ cursoid: req.body.idalu }, { nombre: 1 }).exec();
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

  res.send(arrayAlumnosOrdenados);
}

async function getAlumnos(req, res) {
  const arrayAlumnosDB = await Alumno.find({});
  res.send(arrayAlumnosDB);
}

async function altaAlumno(req, res) {
  const existe = await Alumno.find({ dni: req.body.values.id }).exec();
  const idPrimero = await Curso.find({ id: 1 }, '_id').exec();
  let respuesta = ''
  if (existe.length == 0) {
    //error si termina con espacio
    const name = req.body.values.lastName.toUpperCase() + ', ' + req.body.values.name.split(' ').map(palabra => {
      return palabra[0].toUpperCase() + palabra.slice(1).toLowerCase();
    }).join(' ')

    const newAlu = {
      dni: req.body.values.id,
      nombre: name,
      age: req.body.values.age,
      user: req.body.values.user,
      password: req.body.values.password,
      fnac: req.body.values.birthdate,
      cursoid: idPrimero[0]._id
    };

    await new Alumno(newAlu).save();
    respuesta = 'Alumno registrado exitosamente'
  } else {
    respuesta = 'Alumno existente, nombre de usuario: ' + existe[0].user
  }
  res.send(respuesta)
}

module.exports = {
  getFilterAlumnos: getFilterAlumnos,
  getAlumnos: getAlumnos,
  altaAlumno: altaAlumno
};