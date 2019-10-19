import {Utils} from "../routes/utils";
import * as mongoModels from '../models/mongo/index'
import * as mongoose from "mongoose";
import * as jwt from "jsonwebtoken";
import * as request from "request";

export class KWController {
    static async cadastraPrecoMedio(valorTotal: number, valoresTarifaConvencional: any) {
        let ValorKW = mongoose.model('KWValoresMedios', mongoModels.KWValoresMedios);

        const valorKW = new ValorKW({
            dataSync: new Date().toISOString().replace("T", " ").replace("Z", ""),
            valorMedio: valorTotal / valoresTarifaConvencional.length
        });
        await ValorKW.collection.insertOne(valorKW);
    }
    static async retornaPrecoMedio() {
        let ValorKW = mongoose.model('KWValoresMedios', mongoModels.KWValoresMedios);

        try {
            const precoMedio: any = (await ValorKW.find({}).sort({'dataSync': -1}).limit(1))[0];
            return precoMedio.valorMedio;
        } catch (e) {
            console.error(e);
            return null;
        }
    }
}
