const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser')
const cursoRouter = require('./routes/curso')
const alumnoRouter = require('./routes/alumno')
const boletinRouter = require('./routes/boletin')
const docenteRouter = require('./routes/docente')
const mongoDB = require('./configs/mongodb')


require('dotenv').config()
mongoDB(process.env);
const PORT = process.env.PORT || 5000;

const app = express();

//app.use(logger('dev'));
//app.use(json());
//app.use(urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())
app.use('/', cursoRouter);
app.use('/', alumnoRouter);
app.use('/', boletinRouter);
app.use('/', docenteRouter);

app.listen(PORT, () => console.log('Server escuchando en el puerto', PORT))  
