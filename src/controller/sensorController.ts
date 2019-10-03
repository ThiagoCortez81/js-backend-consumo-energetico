import {Utils} from "../routes/utils";
import * as mongoModels from '../models/mongo/index'
import * as mongoose from "mongoose";
import {mongo} from "mongoose";

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

    public async listarSensoresCliente(req: any, res: any) {
        let response = {
            isAuthenticated: true,
            sensores: {}
        };

        if (Utils.listTest(req.user.usuario)) {
            const idUsuario = req.user.usuario._id;

            response.sensores = await SensorController.buscaSensores(idUsuario);
        }


        res.send(response);
    }

    public async alterarSensorApelido(req: any, res: any) {
        let response = {
            isAuthenticated: true,
            success: false
        };

        if (Utils.listTest(req.user.usuario)) {
            const sensor = req.body.sensor;

            response.success = await SensorController.atualizaApelidoSensor(sensor._id, sensor.apelido);
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

    static async buscaSensores(idCliente: string) {
        let Sensores = mongoose.model('Sensores', mongoModels.Sensores);
        const sensor = {
            idCliente: idCliente
        };

        return await Sensores.find(sensor);
    }

    static async atualizaApelidoSensor(idSensor: string, apelido: String) {
        let success = false;

        let Sensores = mongoose.model('Sensores', mongoModels.Sensores);
        const sensor: any = await Sensores.findOne({_id: idSensor});
        if (sensor != null) {
            sensor.apelido = apelido;

            await sensor.save();
            success = true;
        }

        return success;
    }
}

const sensorController = new SensorController();
export default sensorController;
