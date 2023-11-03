/* parte dois ---> depois de ter os testes escritos / pensar quais cenários eu vou precisar testar, faço a implementação da classe, seus atributos
e métodos, tendo como referência o diagrama UML do projeto, as regras de negócio, etc.
*/
class Cliente {
    //atributos da minha classe.
    nome;
    #cpf;
    #renda;
    #dadosDaConta;

    /* O método registrar é importante para que "uma pessoa deixe de ser aleatória", para se tornar cliente do banco.
    sendo assim, os parâmetros do construtor vão existir e serem recebidos dentro da verificação do método (o if).*/

    // constructor(nome, cpf, dadosDaConta, renda) { //aqui, passo para o construtor quais são os parametros que constroem o meu objeto
    //     this.nome = nome;
    //     this.#cpf = cpf;
    //     this.#renda = renda;
    //     this.#dadosDaConta = dadosDaConta;
    // }

    registrar(nome, cpf, dadosDaConta, renda) {
        if (conta instanceof Conta) { //regra de negócio: eu só registro o cliente se ele tiver conta! se não, os dados nem serão recebidos.
            this.nome = nome;
            this.#cpf = cpf;
            this.#renda = renda;
            this.#dadosDaConta = dadosDaConta;

            return "Cliente cadastrado!";
        } else {
            throw new Error("Erro no cadastro - dados inválidos!")
        }

    }
}

module.exports = Cliente;