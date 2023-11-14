const Conta = require("../Conta/Conta");

class Cliente {
    nome;
    #cpf;
    #renda;
    #dadosDaConta;

    registrarCliente(nome, cpf, dadosDaConta, renda) {
        if (dadosDaConta instanceof Conta) {
            this.nome = nome;
            this.#cpf = cpf;
            this.#renda = renda;
            this.#dadosDaConta = dadosDaConta;

            return "Cliente cadastrado!";
        } else {
            throw new Error("Erro no cadastro - dados inválidos!");
        }
    }
}

module.exports = Cliente;