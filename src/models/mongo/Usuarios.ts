import {Modulos} from "./Modulos";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

export const Usuarios = new Schema({
    nome: String,
    dataNascimento: String,
    email: {type: String, unique: true},
    senha: String,
    modulos: Array
});
