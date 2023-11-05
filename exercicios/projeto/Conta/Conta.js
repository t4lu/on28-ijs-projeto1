/* parte quatro --> implementação da classe com seus respectivos métodos e atributos. eles devem ser coerentes ao que foi escrito nos testes.*/
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

    setSaldo(novoSaldo) {
        this.#saldo = novoSaldo;
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

    sacar(valor) {
        if (valor > 0 && typeof valor === "number") {
            if (this.#saldo - valor > 0) {
                const saldoAtualizado = this.#saldo - valor;
                this.setSaldo(saldoAtualizado);
            } else {
                throw new Error("Saldo insuficiente para saque.");
            }

        } else {
            throw new Error("Valor inválido para saque!");
        }
    }

    depositar(valor) {
        if (valor > 0 && typeof valor === "number") {
            const saldoAtualizado = this.#saldo += valor;
            this.setSaldo(saldoAtualizado);
        } else {
            throw new Error("Valor inválido para depósito.");
        }
    }

    criarChavePix(chavePix, tipo) {
        switch (tipo) {
            case "CPF":
                let regexCPF = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/;
                if (regexCPF.test(chavePix)) {
                    this.chavesPix.cpf = chavePix;
                    return "CPF cadastrado como chave pix com sucesso!";
                } else {
                    throw new Error("Erro: CPF inválido!")
                }
            case "EMAIL":
                let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;;
                if (regexEmail.test(chavePix)) {
                    this.chavesPix.email = chavePix;
                    return "Email cadastrado como chave pix com sucesso!";
                } else {
                    throw new Error("Erro: E-mail inválido!")
                }
            case "TELEFONE":
                let regexTelefone = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;
                if (regexTelefone.test(chavePix)) {
                    this.chavesPix.telefone = chavePix;
                    return "Telefone cadastrado como chave pix com sucesso!";
                } else {
                    throw new Error("Erro: Telefone inválido!")
                }
            default:
                return "Chave pix não existe.";
        }
    }
}

module.exports = Conta;