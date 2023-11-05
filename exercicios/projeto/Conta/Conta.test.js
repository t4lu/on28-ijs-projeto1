/* parte três --> escrever os testes da classe Conta; entender o que vai precisar ser testado, antes de iniciar a implementação.*/
const Conta = require('./Conta');

describe("Testes da classe Conta", () => {
    test("Verificar se uma instância da classe Conta está sendo criada.", () => {
        const conta = new Conta();
        expect(conta instanceof Conta).toBe(true);
    });

    test("Instanciar conta com valores válidos.", () => {
        /* Atributos que a classe conta vai ter:
        agencia (4 dígitos: string) -> privado;
        conta (5 dígitos: string) -> privado;
        saldo (numero positivo: number) -> privado;

        */
        const conta = new Conta("1234", "12345", 1000);

        //verificar se os dados enviados estão corretos. é necessário mais de um expect.

        //1 - os métodos e atributos são privados, então é necessário utilizar get e set para ter acesso/manipular.
        expect(conta.agencia).toBe("1234"); //verifica se o dado é uma string.
        expect(conta.conta).toBe("12345"); //verifica se o dado é uma string.
        expect(conta.saldo).toBe(1000); //verifica se o dado é um number.
    });

    test("Retorna mensagem de sucesso, ao criar conta.", () => {
        const conta = new Conta();

        conta.criarConta("1234", "12345", 1000);
        expect(conta.criarConta("1234", "12345", 1000)).toBe("Conta criada com sucesso!");
        expect(conta.agencia).toBe("1234");
        expect(conta.conta).toBe("12345");
        expect(conta.saldo).toBe(1000);
    });

    test("Retorna mensagem de erro ao tentar criar conta com dados inválidos.", () => {
        const conta = new Conta();
        expect(() => conta.criarConta("123456", "123", 1000)).toThrow("Dados inválidos para cadastro.");
    });

    test("Retorna mensagem de sucesso, ao realizar um saque.", () => {
        const conta = new Conta();

        conta.criarConta("1234", "12345", 1000);

        conta.sacar(100);
        expect(conta.saldo).toBe(900);
    });

    test("Retorna mensagem de erro, ao tentar sacar valor negativo.", () => {
        const conta = new Conta();
        conta.criarConta("1234", "12345", 1000);

        conta.sacar(-100);
        expect(() => conta.sacar(-100)).toThrow("Valor inválido para saque!");
        expect(conta.saldo).toBe(1000);
    });

    test("Retorna mensagem de erro, ao tentar sacar valor maior que o disponível em conta.", () => {
        const conta = new Conta();
        conta.criarConta("1234", "12345", 1000);

        conta.sacar(2000);
        expect(() => conta.sacar(-100)).toThrow("Saldo insuficiente");
        expect(conta.saldo).toBe(1000);
    });

    test("Retorna mensagem de sucesso ao depositar valor em conta.", () => {
        const conta = new Conta();
        conta.criarConta("1234", "12345", 1000);

        conta.depositar(100);
        expect(conta.saldo).toBe(1100);
    });

    test("Retorna mensagem de erro ao depositar valor negativo em conta.", () => {
        const conta = new Conta();
        conta.criarConta("1234", "12345", 1000);

        expect(() => conta.depositar(-100).toThrow("Valor inválido para depósito."));
        expect(conta.saldo).toBe(1000);
    });

    test("Retorna mensagem de erro, caso o dado de valor recebido não seja numérico.", () => {
        const conta = new Conta();
        conta.criarConta("1234", "12345", 1000);

        expect(() => conta.depositar("100")).toThrow("Valor inválido para depósito.");
        expect(conta.saldo).toBe(1000);
    });

    test("Deve criar uma chave pix por CPF -- do tipo string -- com sucesso.", () => {
        //setup - define / monta / estrutura o objeto que precisa ser testado (mock)
        const conta = new Conta();

        //ação - o que será feito com / por / pelo objeto
        /* const operacao = conta.criarChavePix("12345678910", "CPF"); vai dar erro, o método ainda não existe. nos parametros,
        o objetivo do método vai ser analisar se é um CPF, email ou telefone. essa informação deve ser retornada ao usuário.*/

        //verificação - sintaxe para descrever o que se espera de resultado da ação; aqui deve-se usar os matchers do jest
        expect(conta.criarChavePix("12345678910", "CPF")).toBe("CPF cadastrado como chave pix com sucesso!");

        //aqui, consigo invocar os atributos que estão dentro do objeto chavesPix (ps: poderia ser um array. nao foi usada dessa forma pq, no mercado, quando se conecta ao banco de dados, é necessário passar "keys" e "values" --> cpf: undefined, por exemplo)
        expect(conta.chavesPix.cpf).toBe("12345678910");
    });

    test("Deve retornar mensagem de erro, ao cadastrar chave pix com CPF inválido.", () => {
        //setup
        const conta = new Conta();

        //verificação
        expect(() => conta.criarChavePix("451235", "CPF")).toThrow("Erro: CPF inválido!");
    });

    test("Deve criar uma chave pix por email -- do tipo string -- com sucesso.", () => {
        const conta = new Conta();

        expect(conta.criarChavePix("email@email.com", "EMAIL")).toBe("Email cadastrado como chave pix com sucesso!");
        expect(conta.chavesPix.email).toBe("email@email.com");
    });

    test("Deve retornar mensagem de erro ao cadastrar chave pix com e-mail inválido.", () => {
        const conta = new Conta();

        expect(() => conta.criarChavePix("emailarrobaemailpontocom", "EMAIL")).toThrow("Erro: E-mail inválido!");
    });

    test("Deve criar chave pix por telefone -- do tipo string -- com sucesso.", () => {
        const conta = new Conta();

        expect(conta.criarChavePix("11 1234-5678", "TELEFONE")).toBe("Telefone cadastrado como chave pix com sucesso!");
        expect(conta.chavesPix.telefone).toBe("11 1234-5678");
    });

    test("Deve retornar mensagem de erro, ao cadastrar chave pix com telefone inválido.", () => {
        const conta = new Conta();

        expect(() => conta.criarChavePix("11111111", "TELEFONE")).toThrow("Erro: Telefone inválido!");
    });

    /* dados que serão necessários para transferência:
    - emissor: conta que envia o dinheiro;
    - receptor: conta que recebe o dinheiro;
    - agência e conta do receptor;
    - método vai precisar receber como parâmetros: o valor, agência do receptor, conta do receptor;
    * valor precisa ser válido (> 0);
    * saldo suficiente;
    * dados precisam ser válidos. */

    test("Retorna uma mensagem de sucesso, ao completar uma transferência com valor válido, saldo suficiente e dados da conta receptora válidos.", () => {
        /* para esse teste, serão necessárias das contas como objetos de Conta. */

        const contaEmissor = new Conta();
        const contaReceptor = new Conta();

        contaEmissor.criarConta("6895", "54682", 1000);
        contaReceptor.criarConta("6895", "48732", 200);

        expect(contaEmissor.transferir(100, "6895", "48732")).toBe("Transferência realizada!");
        expect(contaEmissor.conta.saldo).toBe(900);
        expect(contaReceptor.conta.saldo).toBe(300);
    });
});