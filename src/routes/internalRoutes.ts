import {Router} from 'express';
import userController from "../controller/userController";
import sensorController from "../controller/sensorController";
import {Utils} from "./utils";
import dadosMedicoesController from "../controller/dadosMedicoesController";
import notificationController from "../controller/notificationController";

class InternalRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', (req, res) => {
            res.send({"message": "It works!"})
        });

        this.router.post('/sync', userController.synchronizeMediumPrice);
    }
}

const internalRoutes = new InternalRoutes();
export default internalRoutes.router;
