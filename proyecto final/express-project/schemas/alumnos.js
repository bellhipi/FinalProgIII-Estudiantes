const mongoose = require('mongoose')
const { ObjectID } = Schema.Types;

const alumnosSchema = mongoose.Schema({
    dni: {
        type: Number,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    cursoid: {
        type: ObjectID,
        required: true
    },
    curso: {
        type: Number,
        required: true
    },
    ausentes: {
        type: Number,
        required: true
    },
    notas: {
        type: [Number],
        required: true
    },
});

const Alumno = mongoose.model('alumno', alumnosSchema);

module.exports = Alumno;