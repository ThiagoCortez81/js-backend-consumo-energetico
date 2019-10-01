import {Utils} from "../routes/utils";
import * as mongoModels from '../models/mongo/index'
import * as mongoose from "mongoose";

class SensorController {
    public async cadastrarDadosMedicao(req: any, res: any) {
        let response: {};

        const headers = req.headers;
        if (Utils.isAuthenticated(headers)) {
            const body = req.body;

            // Log
            console.info(`Recebi um POST em /cadastrarDadosMedicao. Dados ${JSON.stringify(body)}`);

            const macSensor = body.macsensor;
            const corrente = body.corrente;
            const tensao = 127; //TODO: Alterar para tensão no momento do cadastro do sensor
            const potencia = (corrente * tensao) / 1000; //W para KW
            const dataEnvio = body.timestamp;

            response = await SensorController.salvaDadosSensor(corrente, potencia, dataEnvio, macSensor);
        } else {
            response = {
                id: null,
                success: false,
                isAuthenticated: false
            }
        }

        res.send(response);
    }

    static async salvaDadosSensor(corrente: number, potencia: number, dataEnvio: String, macSensor: String) {
        let DadosMedicao = mongoose.model('DadosMedicao', mongoModels.DadosMedicao);
        const dadosMedicao = new DadosMedicao({
            corrente: corrente,
            potencia: potencia,
            dataEnvio: dataEnvio,
            macSensor: macSensor
        });

        const mongoInsertion = await DadosMedicao.collection.insertOne(dadosMedicao);

        if (mongoInsertion.insertedId)
            return {
                id: mongoInsertion.insertedId,
                success: true,
                isAuthenticated: true
            };
        else
            return {
                id: null,
                success: false,
                isAuthenticated: true
            };
    }
}

const sensorController = new SensorController();
export default sensorController;
