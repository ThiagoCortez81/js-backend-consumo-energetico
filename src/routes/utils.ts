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
}
