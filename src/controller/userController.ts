import {Utils} from "../routes/utils";
import * as mongoModels from '../models/mongo/index'
import * as mongoose from "mongoose";
import * as jwt from "jsonwebtoken";
import * as request from "request";
import {KWController} from "./KWController";

const SECRET = process.env.SECRET || "sleocgrient";

class UserController {
    public async loginUsuario(req: any, res: any) {
        let response: any;
        const body = req.body;

        // Log
        console.info(`Recebi um POST em /loginUsuario. Dados ${JSON.stringify(body)}`);

        const email = body.email;
        let senha = body.senha;

        if (Utils.isStrValid(email) && Utils.isStrValid(senha)) {
            // Criptografando senha
            senha = Utils.encryptPassword(senha);
            // Faço busca no banco
            response = await UserController.buscaDadosUsuario(email, senha);
            if (response.success) {
                response['token'] = jwt.sign({"usuario": response.usuario}, SECRET, {
                    expiresIn: 60 * 60 // 1 Hora
                });

                response['valorKW'] = await KWController.retornaPrecoMedio();
            }

            if (response.usuario)
                delete response.usuario._id;
        } else {
            response = UserController.geraRespostaCompleta(false, 'Preencha todos os campos!');
        }

        res.send(response);
    }

    public async cadastrarUsuario(req: any, res: any) {
        let response: {};
        const body = req.body;

        // Log
        console.info(`Recebi um POST em /cadastrarUsuario. Dados ${JSON.stringify(body)}`);

        const nome = body.nome;
        const dataNascimento = body.dataNascimento;
        const email = body.email;
        let senha = body.senha;
        const confirmarSenha = body.confirmarSenha;

        // Verifico se todos os campos foram preenchidos
        if (Utils.isStrValid(nome) && Utils.isStrValid(dataNascimento) && Utils.isStrValid(email)
            && Utils.isStrValid(senha) && Utils.isStrValid(confirmarSenha)) {

            // Verifico se a senha informada eh igual a inserida na confirmação
            if (senha == confirmarSenha) {
                senha = Utils.encryptPassword(senha);
                //Tento inserir no banco
                try {
                    response = await UserController.salvaDadosUsuario(nome, dataNascimento, email, senha);
                } catch (e) {
                    response = {
                        success: false,
                        msg: 'Já existe um usuário cadastrado com esse e-mail!'
                    };
                    console.error(e);
                }
            } else {
                response = UserController.geraRespostaCompleta(false, 'Erro ao cadastrar. As senhas inseridas não conferem!');
            }
        } else {
            response = UserController.geraRespostaCompleta(false, 'Erro ao cadastrar. Preencha todos os campos!');
        }

        res.send(response);
    }

    public async synchronizeMediumPrice(req: any, res: any) {
        const url = 'http://www.aneel.gov.br/dados/relatorios?p_p_id=dadosabertos_WAR_dadosabertosportlet&p_p_lifecycle=2&p_p_state=normal&p_p_mode=view&p_p_resource_id=gerarTarifaFornecimentoResidencialJSON&p_p_cacheability=cacheLevelPage&p_p_col_id=column-2&p_p_col_count=1';

        request.get({
            url: url,
            json: true,
            headers: {'User-Agent': 'request'}
        }, async (err, resp, data) => {
            if (err) {
                console.log('Error:', err);
                res.status(500).send({res: 'Erro!'});
            } else if (resp.statusCode !== 200) {
                res.status(500).send({res: 'Erro!'});
            } else {
                let valorTotal = 0;
                console.log('data', data);
                console.log('resp', resp);

                let valoresTarifaConvencional = data.filter((row: any) => {
                    return row.dthInicioVigencia.includes(new Date().getFullYear());
                }).map((row: any) => {
                    const tarifa = parseFloat(row.vlrTotaTRFConvencional);
                    console.log('tarifa', tarifa);
                    valorTotal += tarifa;
                    return tarifa;
                });
                valoresTarifaConvencional = 0.9;

                await KWController.cadastraPrecoMedio(valorTotal, valoresTarifaConvencional);
                res.send({res: "Salvo!"});
            }
        });
    }

    static async buscaDadosUsuario(email: String, senha: String) {
        let Usuarios = mongoose.model('Usuario', mongoModels.Usuarios);

        const usuario = {
            email: email,
            senha: senha
        };

        try {
            const listUsuario = await Usuarios.find(usuario);
            return this.processarRespostaUsuarios(listUsuario);
        } catch (e) {
            console.error(e);
            return UserController.geraRespostaCompleta(false, "Ocorreu um erro interno");
        }
    }

    static processarRespostaUsuarios(users: any) {
        if (Utils.listTest(users[0])) {
            const user = users[0];
            return {
                success: true,
                usuario: {
                    _id: user._id,
                    nome: user.nome,
                    modulos: user.modulos
                }
            };
        } else {
            return UserController.geraRespostaCompleta(false, 'Combinação de usuário/senha não conferem');
        }
    }

    static async salvaDadosUsuario(nome: String, dataNascimento: String, email: String, senha: String) {
        let Usuarios = mongoose.model('Usuario', mongoModels.Usuarios);
        const usuarios = new Usuarios({
            nome: nome,
            dataNascimento: dataNascimento,
            email: email,
            senha: senha,
            modulos: []
        });

        const mongoInsertion = await Usuarios.collection.insertOne(usuarios);

        if (mongoInsertion.insertedId)
            return this.geraRespostaCompleta(true, 'Usuario inserido com sucesso!');
        else
            return this.geraRespostaCompleta(false, 'Erro ao cadastrar usuário, tente novamente mais tarde!');
    }

    static geraRespostaCompleta(success: boolean, msg: String) {
        return {
            success: success,
            msg: msg,
            token: ''
        };
    }
}

const userController = new UserController();
export default userController;
