import {Router} from 'express';
import userController from "../controller/userController";
import sensorController from "../controller/sensorController";
import {Utils} from "./utils";
import dadosMedicoesController from "../controller/dadosMedicoesController";
import notificationController from "../controller/notificationController";

class ApiRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', (req, res) => {
            res.send({"message": "It works!"})
        });

        this.router.post('/login', userController.loginUsuario);
        this.router.post('/cadastrarUsuario', userController.cadastrarUsuario);

        this.router.post('/listarSensoresCliente', Utils.verifyJWT, sensorController.listarSensoresCliente);
        this.router.post('/alterarSensorApelido', Utils.verifyJWT, sensorController.alterarSensorApelido);
        this.router.post('/alterarSensorLimite', Utils.verifyJWT, sensorController.alterarSensorLimite);
        this.router.post('/alterarSensorLimitePico', Utils.verifyJWT, sensorController.alterarSensorLimitePico);

        // Listar consumo
        this.router.post('/listarConsumoSensor', Utils.verifyJWT, dadosMedicoesController.listarConsumoSensor);

        // Notificacoes
        this.router.post('/storeToken', Utils.verifyJWT, notificationController.storeToken);

        // Salvar sensor para cliente
    }
}

const apiRoutes = new ApiRoutes();
export default apiRoutes.router;
