
const Boletin = require("../schemas/boletin")


/* async function getNombreMateria(req, res){
    const nombreMateria = await Materia.findById(req,{_id:0, nombre:1}).exec();
    return(nombreMateria.nombre)
} 
*/




async function getFilterBoletin(req, res) {
    console.log(req.body.id)

    const arrayNotasDB = await Boletin.find({alumnoid: req.body.id},{_id:0, notas:1}).populate('notas.materiaid').exec();
    const notas = arrayNotasDB[0].notas
   
    const arrayNotas =[]
    
    for( var i = 0; i<notas.length; i++){
        arrayNotas[i]={
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



module.exports = {
    getFilterBoletin : getFilterBoletin,
};
