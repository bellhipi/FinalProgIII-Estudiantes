const mongoose = require('mongoose')
const { ObjectID } = mongoose.Schema.Types;

const cursoSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    materias: {
        type: [ObjectID],
        ref: 'Materia',
        required: true
    }
});

module.exports = mongoose.model('Curso', cursoSchema);