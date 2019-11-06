// Conexões ao MQTT e ao MongoDB
const mqtt = require('mqtt');
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Schema = mongoose.Schema;
const app = new express();
const config = require('../../config.json');

const FCM = require('fcm-node');
const serverKey = require('./consumo-energ-169a4-firebase-adminsdk-95yad-37480a86a6.json');

const fcm = new FCM(serverKey);

////////////////////////////////////////////// CONEXÃO AO BROKER E AO MONGO
var client = mqtt.connect('mqtt://soldier.cloudmqtt.com', {
    username: 'ejywlusy',
    password: '6wNPsfsgCWpX',
    port: 12689
});

mongoose.connect(`mongodb://${config.databaseConf.mongo.host}/${config.databaseConf.mongo.database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    "auth": {"authSource": "admin"},
    "user": "admin",
    "pass": "abc123"
});

mongoose.connection.on('connected', function () {
    console.log("Mongoose default connection is open");
});

mongoose.connection.on('error', function (err) {
    console.log("Moongoose default connection has occured " + err + " error");
});

///////////////////////////////////////// CRIANDO SCHEMAS E DEFININDO OS TÓPICOS
const schemaNivel = new Schema({
    topic: String,
    litros: Number,
    porcentagem: Number,
    date: Date
});

const schemaValvula = new Schema({
    topic: String,
    valor: Number,
    date: Date
});

const schemaToken = new Schema({
    token: String,
    idCliente: String
});

// Nome do tópico que irá subscrever
var topic = 'ultraIMM/Nivel';
var topic2 = 'ultraIMM/valvStatus';

///////////////////////////////////////////// CONEXÃO AOS TÓPICOS
// Verificando se o Broket MQTT está conectado
client.on('connect', function () {
    console.log('connected cloudMQTT');

    client.subscribe(topic, function (err) {
        if (!err) {
            console.log('subscribed Nivel');

            //client.publish(topic, 'Deu certo');
        } else {
            console.log('error');
        }
    });
    client.subscribe(topic2, function (err) {
        if (!err) {
            console.log('subscribed valvStatus');

            //client.publish(topic, 'Deu certo');
        } else {
            console.log('error');
        }
    });
});

///////////////////////////////////////////// INSERINDO OS VALORES DO BROKER NO MONGO
function insereValvulaMongo(message) {
    let d = new Date();
    let dados2 = mongoose.model('dados2', schemaValvula);
    const dado2 = new dados2({
        topic: "ultraIMM/valvStatus",
        valor: message,
        date: d.toLocaleString('pt-br')
    });

    dados2.collection.insertOne(dado2);

    console.log('Inseriu Válvula: ' + message.toString());
}


client.on('message', function (topic, message) {

    if (topic == 'ultraIMM/Nivel') {
        let d = new Date();
        let tamanhoCaixa = 0.19;
        let capacidadeCaixa = 2;
        let porcentagem = ((tamanhoCaixa - message) / tamanhoCaixa);
        let litros = porcentagem * capacidadeCaixa;
        let dados = mongoose.model('dados', schemaNivel);
        const dado = new dados({
            topic: "ultraIMM/Nivel",
            litros: litros,
            porcentagem: porcentagem,
            date: d.toLocaleString('pt-br')
        });

        dados.collection.insertOne(dado);

        console.log('Inseriu Nível: ' + message.toString());

        let title = 'Alerta!';
        let body = '';
        if (porcentagem <= 0.4) {
            body = 'Nível abaixo do mínimo de segurança. Verifique imediatamente.';
        } else if (porcentagem >= 0.8) {
            body = 'Nível acima do máximo de segurança. Verifique imediatamente.';
        }

        enviarNotificacao(title, body);
    }

});

client.on('message', function (topic2, message) {

    if (topic2 == 'ultraIMM/valvStatus') {
        insereValvulaMongo(message);
    }

});

//////////////////////////////////////////////////// BUSCANDO NO MONGO
async function retornaUltimoLitro() {
    let dados = mongoose.model('dados', schemaNivel);
    let data = await dados.find({}).sort({'date': -1}).limit(1);
    return data[0].litros;
}

async function retornaUltimaPorcentagem() {
    let dados = mongoose.model('dados', schemaNivel);
    let data = await dados.find({}).sort({'date': -1}).limit(1);
    return data[0].porcentagem;
}

async function retornaUltimoStatusValvula() {
    let dados = mongoose.model('dados2', schemaValvula);
    let data = await dados.find({}).sort({'date': -1}).limit(1);
    if (data[0] == null)
        return 0;
    return data[0].valor;
}

async function buscaTodosTokens() {
    let Tokens = mongoose.model('Tokens', schemaToken);
    return await Tokens.find({});
}

///////////////////////////////////////////////////// ENVIANDO NOTIFICAÇÕES
async function enviarNotificacao(title, body) {
    const token_array = await buscaTodosTokens();

    for (let i = 0; i < token_array.length; i++) {
        const token = token_array[i];
        const message = {
            to: token,
            notification: {
                title: title,
                body: body
            }
        };

        fcm.send(message, function (err, response) {
            if (err) {
                console.log("Erro ao enviar notificação!", err, response);
            } else {
                console.log("Notificação enviada! Token: " + token);
            }
        });
    }
}

///////////////////////////////////////////////////// ROTAS
app.use(cors());
app.use(bodyParser.json());

app.get('/litros', async (req, res) => {
    let retorno = 'value='
    retorno += await retornaUltimoLitro();

    res.status(200).send(retorno.toString());
});

app.get('/porcentagem', async (req, res) => {
    let retorno = 'value='
    retorno += await retornaUltimaPorcentagem();

    res.status(200).send(retorno.toString());
});

app.get('/valvula', async (req, res) => {
    let retorno = await retornaUltimoStatusValvula();

    res.status(200).send(retorno.toString());
});

app.post('/', async (req, res) => {

    let valor = req.body.valor;
    let topic1 = 'ultraIMM/VALVULA';
    console.log('Botao Válvula: ', valor);

    insereValvulaMongo(valor);
    client.publish(topic1, valor);

    res.status(200).send(valor);
});

app.listen(3000);
