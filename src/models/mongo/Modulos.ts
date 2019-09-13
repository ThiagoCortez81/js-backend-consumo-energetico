const mongoose = require('mongoose');
const Schema = mongoose.Schema;

export const Modulos = new Schema({
    mac: String,
    key: String
});
