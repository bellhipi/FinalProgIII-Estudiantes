const express = require('express')
const cors = require('cors');
const indexRouter = require('./routes/index')
const mongoDB = require('./configs/mongodb')


require('dotenv').config()
mongoDB(process.env);
const PORT = process.env.PORT || 5000;

const app = express();

//app.use(logger('dev'));
//app.use(json());
//app.use(urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(cors())
app.use('/', indexRouter);

app.listen(PORT, () => console.log('Server escuchando en el puerto', PORT))  
