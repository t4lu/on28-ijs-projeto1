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
});