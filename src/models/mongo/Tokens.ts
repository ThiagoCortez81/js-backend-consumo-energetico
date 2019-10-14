const mongoose = require('mongoose');
const Schema = mongoose.Schema;

export const Tokens = new Schema({
    token: String,
    idCliente: String
});
