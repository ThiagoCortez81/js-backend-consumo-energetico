const mongoose = require('mongoose');
const Schema = mongoose.Schema;

export const Sensores = new Schema({
    idCliente: String,
    apelido: String,
    macSensor: String,
    key: String,
    ultimaComunicacao: String,
    limiteAlerta: String
});
