import {Router} from 'express';
import userController from "../controller/userController";
import sensorController from "../controller/sensorController";
import {Utils} from "./utils";

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
    }
}

const apiRoutes = new ApiRoutes();
export default apiRoutes.router;
