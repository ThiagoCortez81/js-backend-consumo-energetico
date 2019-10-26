import {Utils} from "../routes/utils";
import * as mongoModels from '../models/mongo/index'
import * as mongoose from "mongoose";
import {DadosMedicoesController} from "./dadosMedicoesController";

export class SensorController {
    public async listarSensoresCliente(req: any, res: any) {
        let response = {
            isAuthenticated: true,
            sensores: {}
        };

        if (Utils.listTest(req.user.usuario)) {
            const idUsuario = req.user.usuario._id;
            response.sensores = await (await SensorController.buscaSensores(idUsuario));
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

    public async alterarSensorLimite(req: any, res: any) {
        let response = {
            isAuthenticated: true,
            success: false
        };

        if (Utils.listTest(req.user.usuario)) {
            const sensor = req.body.sensor;

            response.success = await SensorController.atualizaLimiteSensor(sensor._id, sensor.limiteAlerta);
        }


        res.send(response);
    }

    public async alterarSensorLimitePico(req: any, res: any) {
        let response = {
            isAuthenticated: true,
            success: false
        };

        if (Utils.listTest(req.user.usuario)) {
            const sensor = req.body.sensor;

            console.log(sensor)

            response.success = await SensorController.atualizaLimiteSensorPico(sensor._id, sensor.kwAlerta);
        }


        res.send(response);
    }

    static async buscaSensores(idCliente?: string, macSensor?: string) {
        let Sensores = mongoose.model('Sensores', mongoModels.Sensores);
        let sensor: any = {};
        if (idCliente != null) {
            sensor['idCliente'] = idCliente;
        }
        if (macSensor != null) {
            sensor['macSensor'] = macSensor;
        }

        let idx = 0;
        let sensoresDB: any = await Sensores.find(sensor);
        let sensores = [];

        for (let s of sensoresDB) {
            const sensor = {
                apelido: s.apelido,
                consumo: await DadosMedicoesController.verificaConsumoSmartphones(s.macSensor),
                idCliente: s.idCliente,
                key: s.key,
                limiteAlerta: s.limiteAlerta,
                kwAlerta: s.kwAlerta,
                macSensor: s.macSensor,
                ultimaComunicacao: s.ultimaComunicacao,
                _id: s._id
            };
            sensores.push(sensor);
        }

        return sensores;
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

    static async atualizaLimiteSensor(idSensor: string, limite: String) {
        let success = false;

        let Sensores = mongoose.model('Sensores', mongoModels.Sensores);
        const sensor: any = await Sensores.findOne({_id: idSensor});
        if (sensor != null) {
            sensor.limiteAlerta = limite;
            await sensor.save();
            success = true;
        }

        return success;
    }

    static async atualizaLimiteSensorPico(idSensor: string, limite: String) {
        let success = false;

        let Sensores = mongoose.model('Sensores', mongoModels.Sensores);
        const sensor: any = await Sensores.findOne({_id: idSensor});
        if (sensor != null) {
            sensor.kwAlerta = limite;
            await sensor.save();
            success = true;
        }

        return success;
    }

    static async retornaLimiteSensorPico(macSensor: string) {
        let kwAlerta = -1;

        let Sensores = mongoose.model('Sensores', mongoModels.Sensores);
        const sensor: any = await Sensores.findOne({macSensor: macSensor});
        if (sensor != null) {
            kwAlerta = parseFloat(sensor.kwAlerta);
        }

        return kwAlerta;
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
