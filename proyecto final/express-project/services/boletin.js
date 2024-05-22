
const Boletin = require("../schemas/boletin")


/* async function getNombreMateria(req, res){
    const nombreMateria = await Materia.findById(req,{_id:0, nombre:1}).exec();
    return(nombreMateria.nombre)
} */




async function getFilterBoletin(req, res) {
    console.log(req.body.id)

    const arrayNotasDB = await Boletin.find({});

      console.log(arrayNotasDB)
    res.send(arrayNotasDB);
}



module.exports = {
    getFilterBoletin : getFilterBoletin,
};
