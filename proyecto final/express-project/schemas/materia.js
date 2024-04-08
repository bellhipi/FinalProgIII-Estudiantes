const mongoose = require('mongoose')

const materiaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    curso: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Materia', materiaSchema);