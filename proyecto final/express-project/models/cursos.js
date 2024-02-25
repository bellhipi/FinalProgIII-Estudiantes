import mongoose from "mongoose";

const cursosSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    materias: {
        type: [String],
        required: true
    }
});

const Curso = mongoose.model('cursos', cursosSchema);

module.exports = Curso;