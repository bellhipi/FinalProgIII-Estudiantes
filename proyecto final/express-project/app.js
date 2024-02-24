import express, { json, urlencoded } from 'express';
import {PORT} from "./config.js";

//import cookieParser from 'cookie-parser';
//import logger from 'morgan';

//import indexRouter from './routes/index.js';
//import usersRouter from './routes/users.js';

const app = express();

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Holus')
});

app.listen (PORT,()=>{
    console.log(`puerto: ${PORT}`)
});



/* app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);
 */
export default app;
