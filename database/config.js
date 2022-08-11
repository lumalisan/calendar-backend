const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.URLDB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Base de datos conectada correctamente');
    } catch (error) {
        console.error(error);
        throw new Error('Error al iniciar la BD: ' + error);
    }
}

module.exports = {
    dbConnection
}