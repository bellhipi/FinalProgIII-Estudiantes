const Alumno = require("../schemas/alumno")

async function getFilterAlumnos(req, res) {
    const arrayAlumnosDB = await Alumno.find({cursoid: req.body.id},{nombre:1}).exec();
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



module.exports = {
    getFilterAlumnos : getFilterAlumnos,
    getAlumnos: getAlumnos
};