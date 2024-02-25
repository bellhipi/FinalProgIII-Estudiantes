const mongoose = require('mongoose')

 const conectDB = ({USER, PASSWORD, DBNAME}) => {
    require('dotenv').config()
    
    const url = `mongodb+srv://${USER}:${PASSWORD}@mern-database.qpbfqgr.mongodb.net/${DBNAME}?retryWrites=true&w=majority&appName=mern-database`

    mongoose.connect(url)
        .then(() => console.log('Base de datos conectada: ', DBNAME))
        .catch(e => console.log(e))   

}

module.exports = conectDB; 