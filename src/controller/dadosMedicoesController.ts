import {Utils} from "../routes/utils";
import * as mongoModels from '../models/mongo/index'
import * as mongoose from "mongoose";
import {mongo} from "mongoose";
import {BodyFiltroConsumo} from "../models";
import {SensorController} from "./sensorController";
import {NotificationController} from "./notificationController";
import {KWController} from "./KWController";

export class DadosMedicoesController {
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

            // Preciso fazer tudo assincrono, pois essa parte não pode atrapalhar o sync do sensor...
            DadosMedicoesController.verificaNotificacaoSmartphones(macSensor);
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

        if (body.diasParaBuscar == 0) {
            response.dadosMedicoes = DadosMedicoesController.agruparDadosMedicaoRT(dadosMedicoes);
            response.consumoTotal = DadosMedicoesController.somarTodasPotenciasRT(response.dadosMedicoes);
        } else {
            response.dadosMedicoes = DadosMedicoesController.agruparDadosMedicaoDia(dadosMedicoes);
            response.consumoTotal = DadosMedicoesController.somarTodasPotencias(response.dadosMedicoes);
        }

        res.send(response);
    }

    static async salvaDadosSensor(corrente: number, potencia: number, dataEnvio: string, macSensor: string) {
        let DadosMedicao = mongoose.model('DadosMedicao', mongoModels.DadosMedicao);
        const dadosMedicao = new DadosMedicao({
            corrente: corrente,
            potencia: potencia,
            dataEnvio: dataEnvio,
            macSensor: macSensor
        });

        const mongoInsertion = await DadosMedicao.collection.insertOne(dadosMedicao);

        let localISOTime = Utils.geraDataNow();

        if (mongoInsertion.insertedId && SensorController.atualizacaoDataSensor(macSensor, localISOTime))
            return {
                id: mongoInsertion.insertedId,
                kwPico: await SensorController.retornaLimiteSensorPico(macSensor),
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

    static verificaNotificacaoSmartphones(macSensor: string) {
        // TODO AJUSTAR PARA VALOR EM REAIS
        // Vou fazer uma busca do consumo do mês
        const dataMin = Utils.primeiroDiaMesCorrente() + " 00:00:00";
        const dataMax = Utils.ultimoDiaMesCorrente() + " 23:59:59";

        DadosMedicoesController.listarMedicoes(dataMin, dataMax, macSensor).then((res: any) => {
            const dadosMedicoes = DadosMedicoesController.agruparDadosMedicaoDia(res);
            const consumoTotal = DadosMedicoesController.somarTodasPotencias(dadosMedicoes);
            KWController.retornaPrecoMedio().then((preco: any) => {
                const valorFinalKW = consumoTotal * preco;

                if (consumoTotal > 0) {
                    SensorController.buscaSensores(undefined, macSensor).then((sensores: any) => {
                        if (sensores.length > 0) {
                            const sensor = sensores[0];

                            if (Utils.isStrValid(sensor.limiteAlerta)) {
                                // if (parseFloat(sensor.limiteAlerta) > consumoTotal) { // TODO: Remover (DEBUG MODE)
                                if (valorFinalKW > parseFloat(sensor.limiteAlerta)) {
                                    console.debug("Enviando alertas para os smartphones...");
                                    NotificationController.buscaTokens(sensor.idCliente).then((tokens: any) => {
                                        for (let tokenBusca of tokens) {
                                            let enviaNotificacao = true;
                                            if (tokenBusca.ultimaNotificacao != null) {
                                                const now = new Date();
                                                const ultimaNotificacao = new Date(tokenBusca.ultimaNotificacao.toString());
                                                enviaNotificacao = ((now.getTime() - ultimaNotificacao.getTime()) > (1 * 60000));

                                                console.log('ultimaNotificacao=> ', ultimaNotificacao);
                                            }

                                            console.log('enviaNotificacao=> ', enviaNotificacao);

                                            if (enviaNotificacao) {
                                                tokenBusca.ultimaNotificacao = new Date().toISOString();
                                                tokenBusca.save();

                                                const notificationTitle = `ALERTA!`;
                                                const notificationBody = `Atenção, o seu consumo ultrapassou o limite de R$ ${parseFloat(sensor.limiteAlerta).toFixed(2).toString().replace('.', ',')}. Esse mês você já consumiu o equivalente à R$ ${valorFinalKW.toFixed(2).toString().replace('.', ',')}!`;
                                                if (tokenBusca.token != null)
                                                    NotificationController.enviarNotificacao(tokenBusca.token, notificationTitle, notificationBody);
                                            }
                                        }
                                    });
                                }
                            }
                        }
                    });
                }
            });
        });

        console.log('datas', dataMin, dataMax);
    }

    static async verificaConsumoSmartphones(macSensor: string) {
        // Vou fazer uma busca do consumo do mês
        const dataMin = Utils.primeiroDiaMesCorrente() + " 00:00:00";
        const dataMax = Utils.ultimoDiaMesCorrente() + " 23:59:59";

        let res = await DadosMedicoesController.listarMedicoes(dataMin, dataMax, macSensor);
        const dadosMedicoes = DadosMedicoesController.agruparDadosMedicaoDia(res);
        return DadosMedicoesController.somarTodasPotencias(dadosMedicoes);
    }

    static somarTodasPotenciasRT(dadosMedicoes: any): number {
        let potenciaTotal = 0;
        const keys = Object.keys(dadosMedicoes);

        for (let key of keys) {
            potenciaTotal += dadosMedicoes[key];
        }

        return potenciaTotal;
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

    static agruparDadosMedicaoRT(dadosMedicoes: any[]) {
        let localDadosMedicao: any = {};

        for (let dadoMedicao of dadosMedicoes) {
            const keyDay = dadoMedicao.dataEnvio.substring(0, 19).replace('T', ' ');
            if (Object.keys(localDadosMedicao).indexOf(keyDay) == -1)
                localDadosMedicao[keyDay] = 0;

            localDadosMedicao[keyDay] += dadoMedicao.potencia;
        }

        return localDadosMedicao;
    }
}

const dadosMedicoesController = new DadosMedicoesController();
export default dadosMedicoesController;
