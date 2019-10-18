const mongoose = require('mongoose');
const Schema = mongoose.Schema;

export const KWValoresMedios = new Schema({
    dataSync: String,
    valorMedio: Number
});
