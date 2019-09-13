import {Utils} from "../routes/utils";
import * as mongoModels from '../models/mongo/index'
import * as mongoose from "mongoose";

class UserController {
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
                response = UserController.geraRespostaCompletaCadastro(false, 'Erro ao cadastrar. As senhas inseridas não conferem!');
            }
        } else {
            response = UserController.geraRespostaCompletaCadastro(false, 'Erro ao cadastrar. Preencha todos os campos!');
        }

        res.send(response);
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
            return this.geraRespostaCompletaCadastro(true, 'Usuario inserido com sucesso!');
        else
            return this.geraRespostaCompletaCadastro(false, 'Erro ao cadastrar usuário, tente novamente mais tarde!');
    }

    static geraRespostaCompletaCadastro(success: boolean, msg: String) {
        return {
            success: success,
            msg: msg
        };
    }
}

const userController = new UserController();
export default userController;
