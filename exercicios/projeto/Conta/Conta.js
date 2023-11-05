/* parte quatro --> implementação da classe com seus respectivos métodos e atributos. eles devem ser coerentes ao que foi escrito nos testes.*/
class Conta {
    #agencia;
    #conta;
    #saldo;
    chavesPix;
    static listaContas = [];

    constructor(agencia, conta, saldo) {
        this.#agencia = agencia;
        this.#conta = conta;
        this.#saldo = saldo;
        this.chavesPix = {//crio como objeto, todos os parametros definidos como undefined.
            cpf: undefined,
            email: undefined,
            telefone: undefined
        };//define e delimita tres possibilidades de chave pix.

   //     Conta.listaContas.push(this) //insere todo o objeto no array estático listaContas.
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

    transferir(valor, agencia, conta) {
        /*inicialmente, verificar se a conta é válida. mas, não temos banco de dados nem API. como solução, criar uma
        lista estática (static) com essas informações.*/

        let contaValida = Conta.listaContas.find(contaReceptora => { //contaValida vai retornar uma conta existente; do contrário, retorna undefined.
            let numeroDaContaReceptora = contaReceptora.conta;
            let numeroDaAgenciaReceptora = contaReceptora.agencia;

            return numeroDaContaReceptora === conta && numeroDaAgenciaReceptora === agencia;

            /* versao refatorada desse código:
            
            let contaValida = Conta.listaContas.find(contaSelecionada => {
                return contaSelecionada.conta === conta && contaSelecionada.agencia === agencia;
            });
            */
        });

        if (!contaValida) {
            throw new Error("Conta não encontrada");
        }

        if (valor < 0) {
            throw new Error("Valor inválido para transferência.");
        }
        //a conta precisa ter saldo, e não pode ficar negativa depois da transferência.
        if (this.#saldo - valor > 0) {
            const saldoAtualizado = this.#saldo - valor;
            this.setSaldo(saldoAtualizado);
            //atualizar o saldo da conta receptora:
            const saldoContaReceptora = contaValida.saldo + valor;
            contaValida.setSaldo(saldoContaReceptora);
            return "Transferência realizada!"
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