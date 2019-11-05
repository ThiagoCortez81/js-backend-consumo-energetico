import config from '../config.json';
import {Mongoose} from "mongoose";
const mongoose = require('mongoose');

export class MongoClient {
    static mongoConnection: Mongoose = mongoose.connect(`mongodb://admin:abc123@${config.databaseConf.mongo.host}/${config.databaseConf.mongo.database}`, {useNewUrlParser: true});
}

