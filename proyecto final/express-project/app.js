const mongoDB = require('./conection/mongoDB')
import express, { json, request, urlencoded } from 'express';

const Curso = require ('./models/cursos')



//import cookieParser from 'cookie-parser';
//import logger from 'morgan';

//import indexRouter from './routes/index.js';
//import usersRouter from './routes/users.js';

require('dotenv').config()
mongoDB(process.env);

const app = express();

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Holus')
});

app.post('/cursos', async (request, response) => {
    try {
        if(!request.body.id || !request.body.materias){
            return response.status(400).send({
                message: 'Enviados todos los archivos requeridos: id, materias'
            })
        }
        const newCurso = {
            id: request.body.id,
            materias: request.body.materias
        }
        const curso = await Curso.create(newCurso)
        return response.status(201).send(curso)
    } catch (error) {
        console.log(error.message)
        response.status(500).send({ message: error.message })
    }
});



/* app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);
 */
export default app;
