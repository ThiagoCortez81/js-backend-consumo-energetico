import express, {Application} from 'express';
import cors from 'cors';

import sensorRoutes from './routes/sensorRoutes';

class Server {

    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 80);
        this.app.set('timeout', (30 * 60000));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void {
        this.app.use('/appsensor', sensorRoutes);

        this.app.get('/api', (req, res) => {
            res.send({"message": "It works!"})
        });
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();
