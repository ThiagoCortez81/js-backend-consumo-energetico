import {Router} from 'express';
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

            // TODO: Fazer validação do MAC no banco de dados

            const returnObj = {
                success: true,
                macAddress: body.macAddress
            };
            res.json(returnObj);
        });
        this.router.post('/cadastrarDadosMedicao', (req, res) => {
            const headers = req.headers;
            if (Utils.isAuthenticated(headers)) {
                const body = req.body;

                res.send(body);
                /*body.corrente; // em Amperes
                body.potencia; //110v ou 220v
                body.timestamp;            */
            }
        });
    }
}

const sensorRoutes = new SensorRoutes();
export default sensorRoutes.router;
