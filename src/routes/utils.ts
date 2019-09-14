const forge = require('node-forge');

export class Utils {
    static  isAuthenticated(headers: any) {
        return (headers.login != null && headers.login != "" && headers.password != null && headers.password != "")
    }

    static gerarChave(key: string): string {
        const passo = 'consumo-energetico';
        const md = forge.md.sha256.create();
        md.update(passo + key);
        const chave = md.digest().toHex();
        const md1 = forge.md.sha1.create();
        md1.update(chave);
        return md1.digest().toHex();
    }

    static encryptPassword(key: string): string {
        const passo = 'p1a2s3s4w5o6r7d8-c@o!n$s%u&m*o(-)e+n=e´r`g~e^t;i.c.o';
        const md = forge.md.sha256.create();
        md.update(passo + key);
        const chave = md.digest().toHex();
        const md1 = forge.md.sha1.create();
        md1.update(chave);
        return md1.digest().toHex();
    }

    static isStrValid(str: String){
        return (str != null && str != undefined && str != "");
    }

    static listTest(list: Array<any>){
        return (list != null && list != undefined);
    }
}
