const mongoose = require('mongoose')

const docenteSchema = new mongoose.Schema({
    dni: {
        type: Number,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    fnac: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Docente', docenteSchema);