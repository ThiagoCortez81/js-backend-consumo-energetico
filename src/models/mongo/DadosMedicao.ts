const mongoose = require('mongoose');
const Schema = mongoose.Schema;

export const DadosMedicao = new Schema({
    corrente: Number,
    potencia: Number,
    dataEnvio: String,
    macSensor: String
});
