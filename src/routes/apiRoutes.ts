import {Router} from 'express';
import userController from "../controller/userController";

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
    }
}

const apiRoutes = new ApiRoutes();
export default apiRoutes.router;
