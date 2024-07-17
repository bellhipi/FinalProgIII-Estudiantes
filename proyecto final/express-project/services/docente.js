const Docente = require("../schemas/docente")

async function altaDocente(req, res) {
  const existeUser = await Docente.find({ user: req.body.values.user }).exec();
  let respuesta = ''
  if (existeUser.length != 0) {
    respuesta = 'Nombre de usuario existente!'
  } else {
    const existeID = await Docente.find({ dni: req.body.values.id }).exec();
    if (existeID.length != 0) {
      respuesta = 'Su numero de ID ya ha sido registrado para continuar inicie sesión con su nombre de usuario: ' + existeID[0].user + ' y contraseña correspondiente.'
    } else {
      const name = req.body.values.lastName.trim().toUpperCase() + ', ' + req.body.values.name.trim().split(' ').map(palabra => {
        return palabra[0].toUpperCase() + palabra.slice(1).toLowerCase();
      }).join(' ')

      const newDoc = {
        dni: req.body.values.id,
        nombre: name,
        age: req.body.values.age,
        user: req.body.values.user.trim(),
        password: req.body.values.password.trim(),
        fnac: req.body.values.birthdate
      };

      await new Docente(newDoc).save();
      respuesta = 'Docente registrado exitosamente'
    }
  }
  console.log(respuesta)
  res.send(respuesta)
}

module.exports = {
  altaDocente: altaDocente
};