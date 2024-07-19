const Alumno = require("../schemas/alumno")
const Curso = require("../schemas/curso")

async function getAlumno(req, res) {
  const alumnoDB = await Alumno.findById(req.params.id);
  res.send(alumnoDB);
}

async function getFilterAlumnos(req, res) {
  const arrayAlumnosDB = await Alumno.find({ cursoid: req.params.id }, { nombre: 1 }).exec();
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

async function altaAlumno(req, res) {
  const existeUser = await Alumno.find({ user: req.body.values.user }).exec();
  let respuesta = ''
  if (existeUser.length != 0) {
    respuesta = 'Nombre de usuario existente!'
  } else {
    const existeID = await Alumno.find({ dni: req.body.values.id }).exec();
    if (existeID.length != 0) {
      respuesta = 'Su numero de ID ya ha sido registrado para continuar inicie sesión con su nombre de usuario: ' + existeID[0].user + ' y contraseña correspondiente.'
    } else {
      const idPrimero = await Curso.find({ id: 1 }, '_id').exec();
      const name = req.body.values.lastName.trim().toUpperCase() + ', ' + req.body.values.name.trim().split(' ').map(palabra => {
        return palabra[0].toUpperCase() + palabra.slice(1).toLowerCase();
      }).join(' ')

      const newAlu = {
        dni: req.body.values.id,
        nombre: name,
        age: req.body.values.age,
        user: req.body.values.user.trim(),
        password: req.body.values.password.trim(),
        fnac: req.body.values.birthdate,
        cursoid: idPrimero[0]._id
      };

      await new Alumno(newAlu).save();
      respuesta = 'Alumno registrado exitosamente'
    }
  }
  console.log(respuesta)
  res.send(respuesta)
}

async function loginAlumno(req, res) {
  const existeUser = await Alumno.find({ user: req.body.values.username.trim() }, 'password').exec();
  let respuesta = ''
  if (existeUser.length != 0) {
    if (existeUser[0].password == req.body.values.password.trim()) {
      respuesta = existeUser[0]._id
    } else {
      respuesta = 'Contraseña incorrecta!'
    }
  } else {
    respuesta = 'Usuario no registrado!'
  }
  res.send(respuesta)
}

module.exports = {
  getAlumno: getAlumno,
  getFilterAlumnos: getFilterAlumnos,
  altaAlumno: altaAlumno,
  loginAlumno: loginAlumno
};