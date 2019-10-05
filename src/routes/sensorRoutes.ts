import {Router} from 'express';
import sensorController from "../controller/sensorController";
import dadosMedicoesController from "../controller/dadosMedicoesController";
import {Utils} from "./utils";

class SensorRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', (req, res) => {
            res.send({"message": "It works!"})
        });
        this.router.post('/auth', (req, res) => {
            const body = req.body;
            const macAddress = body.macAddress;
            const key = Utils.gerarChave(macAddress);

            // Log
            console.info(`Recebi um POST em /auth. Dados ${JSON.stringify(body)}`);

            // TODO: Fazer validação do MAC no banco de dados


            const returnObj = {
                success: true,
                macAddress: macAddress,
                key: key
            };
            res.json(returnObj);
        });
        this.router.post('/cadastrarDadosMedicao', dadosMedicoesController.cadastrarDadosMedicao);
    }
}

const sensorRoutes = new SensorRoutes();
export default sensorRoutes.router;
