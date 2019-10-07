import {Utils} from "../routes/utils";
import * as mongoModels from '../models/mongo/index'
import * as mongoose from "mongoose";
import {mongo} from "mongoose";
import {BodyFiltroConsumo} from "../models";

class DadosMedicoesController {
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

            response = await DadosMedicoesController.salvaDadosSensor(corrente, potencia, dataEnvio, macSensor);
        } else {
            response = {
                id: null,
                success: false,
                isAuthenticated: false
            }
        }

        res.send(response);
    }

    public async listarConsumoSensor(req: any, res: any) {
        const body: BodyFiltroConsumo = req.body;

        let dadosMedicoes = await DadosMedicoesController.listarMedicoes(body.dataMin, body.dataMax, body.macSensor);

        let response: any = {
            isAuthenticated: true,
            consumoTotal: dadosMedicoes.length,
            dadosMedicoes: {}
        };

        response.dadosMedicoes = DadosMedicoesController.agruparDadosMedicaoDia(dadosMedicoes);
        response.consumoTotal = DadosMedicoesController.somarTodasPotencias(response.dadosMedicoes);
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

    static async listarMedicoes(dataMin: string, dataMax: string, macSensor: string) {
        let filter: any = {};
        if ((Utils.isStrValid(dataMin) && Utils.isStrValid(dataMax)) || Utils.isStrValid(macSensor)) {
            filter['$and'] = [];
        }

        if (Utils.isStrValid(dataMin) && Utils.isStrValid(dataMax)) {
            filter['$and'].push({dataEnvio: {$gte: dataMin, $lt: dataMax}});
        }
        if (Utils.isStrValid(macSensor)) {
            filter['$and'].push({macSensor: macSensor});
        }

        console.debug('ListarMedicoes recebeu filtro->', JSON.stringify(filter));

        let DadosMedicao = mongoose.model('DadosMedicao', mongoModels.DadosMedicao);
        const dadosMedicoes: any[] = await DadosMedicao.find(filter).sort({dataEnvio: 1});

        return dadosMedicoes;
    }

    static somarTodasPotencias(dadosMedicoes: any): number {
        let potenciaTotal = 0;
        const keys = Object.keys(dadosMedicoes);

        for (let key of keys) {
            potenciaTotal += dadosMedicoes[key];
        }

        return potenciaTotal;
    }

    static agruparDadosMedicaoDia(dadosMedicoes: any[]) {
        let localDadosMedicao: any = {};

        for (let dadoMedicao of dadosMedicoes) {
            const keyDay = dadoMedicao.dataEnvio.substring(0, 10);
            if (Object.keys(localDadosMedicao).indexOf(keyDay) == -1)
                localDadosMedicao[keyDay] = 0;

            localDadosMedicao[keyDay] += dadoMedicao.potencia;
        }

        return localDadosMedicao;
    }
}

const dadosMedicoesController = new DadosMedicoesController();
export default dadosMedicoesController;
