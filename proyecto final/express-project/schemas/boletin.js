const mongoose = require('mongoose')
const { ObjectID } = mongoose.Schema.Types;

const boletinSchema = new mongoose.Schema({
    cursoid: {
        type: ObjectID,
        ref: 'Curso',
        required: true
    },
    ausentes: {
        type: Number,
        required: true
    },
    notas: {
        type: [{
            materiaid: {
                type: ObjectID,
                required: true
            },
            nota: {
                type: Number,
                required: true
            }
        }]
    },
    alumnoid: {
        type: ObjectID,
        ref: 'Alumno',
        required: true
    },
});

module.exports = mongoose.model('Boletin', boletinSchema);