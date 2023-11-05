class Conta {
    #agencia;
    #conta;
    #saldo;
    chavesPix;

    constructor(agencia, conta, saldo) {
        this.#agencia = agencia;
        this.#conta = conta;
        this.#saldo = saldo;
        this.chavesPix = {
            cpf: undefined,
            email: undefined,
            telefone: undefined
        };
    }
    get agencia() {
        return this.#agencia;
    }

    get conta() {
        return this.#conta;
    }

    get saldo() {
        return this.#saldo;
    }

    criarConta(agencia, conta, saldo) {
        if (agencia.length === 4 && conta.length === 5 && saldo > 0) {
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