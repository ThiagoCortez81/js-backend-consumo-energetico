import {Utils} from "../routes/utils";
import * as mongoModels from '../models/mongo/index'
import * as mongoose from "mongoose";
import {mongo} from "mongoose";

export class SensorController {
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

    public static async atualizacaoDataSensor(macSensor: string, ultimaComunicacao: string) {
        let success = false;

        let Sensores = mongoose.model('Sensores', mongoModels.Sensores);
        const sensor: any = await Sensores.findOne({macSensor: macSensor});
        if (sensor != null) {
            sensor.ultimaComunicacao = ultimaComunicacao;

            await sensor.save();
            success = true;
        }

        return success;
    }
}

const sensorController = new SensorController();
export default sensorController;
