const mongoose = require('mongoose')
const { ObjectID } = mongoose.Schema.Types;

const subSchema = new mongoose.Schema({
        materiaid: {
            type: ObjectID,
            ref: 'Materia',
            //required: true
        },
        nota: {
            type: Number,
            //required: true
        }
  });

const boletinSchema = new mongoose.Schema({
    cursoid: {
        type: ObjectID,
        ref: 'Curso',
        //required: true
    },
    ausentes: {
        type: Number,
        //required: true
    },
    notas: {
        //type: [{type: subSchema}]
        //type: {type: [subSchema]}
        //type: [subSchema],
        //required: true
    },
    alumnoid: {
        type: ObjectID,
        ref: 'Alumno',
        //required: true
    },
});

module.exports = mongoose.model('Boletin', boletinSchema);