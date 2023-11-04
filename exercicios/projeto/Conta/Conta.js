class Conta {
    #agencia;
    #conta;
    #saldo;
    chavesPix;

    constructor(agencia, conta, saldo) {
        this.#agencia = agencia;
        this.#conta = conta;
        this.#saldo = saldo;
        this.chavesPix = {//crio como objeto, todos os parametros definidos como undefined.
            cpf: undefined,
            email: undefined,
            telefone: undefined
        };//define e delimita tres possibilidades de chave pix.
    }
    get agencia() {
        return this.#agencia;
    }

    get conta() { //gata... esse nome aqui vai dar ruim, depois :eyes:
        return this.#conta;
    }

    get saldo() {
        return this.#saldo;
    }

    criarConta(agencia, conta, saldo) {
        if (agencia.length === 4 && conta.length === 5 && saldo > 0) {
            //faltou eu fazer o construtor........ :clown:
            this.#agencia = agencia;
            this.#conta = conta;
            this.#saldo = saldo;
            return "Conta criada com sucesso!"
        } else {
            throw new Error("Dados inválidos para cadastro.");
        }
    }
}

module.exports = Conta;