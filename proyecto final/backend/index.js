import express, { request, response } from 'express';
import {PORT} from "./config.js"

const app = express();

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Holus')
});

app.listen(PORT, () => console.log('Server escuchando en el puerto', PORT))