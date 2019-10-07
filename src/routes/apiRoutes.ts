import {Router} from 'express';
import userController from "../controller/userController";
import sensorController from "../controller/sensorController";
import {Utils} from "./utils";
import dadosMedicoesController from "../controller/dadosMedicoesController";
import * as apicache from 'apicache'

class ApiRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        let cache = apicache.middleware;

        this.router.get('/', (req, res) => {
            res.send({"message": "It works!"})
        });

        this.router.post('/login', userController.loginUsuario);
        this.router.post('/cadastrarUsuario', userController.cadastrarUsuario);

        this.router.post('/listarSensoresCliente', Utils.verifyJWT, cache('1 minutes'), sensorController.listarSensoresCliente);
        this.router.post('/alterarSensorApelido', Utils.verifyJWT, sensorController.alterarSensorApelido);

        // Listar consumo
        this.router.post('/listarConsumoSensor', Utils.verifyJWT, cache('1 minutes'), dadosMedicoesController.listarConsumoSensor);
    }
}

const apiRoutes = new ApiRoutes();
export default apiRoutes.router;
