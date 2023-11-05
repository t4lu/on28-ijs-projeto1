const Conta = require('./Conta');

describe("Testes da classe Conta", () => {
    let contaMockada;
    beforeEach(() => {
        contaMockada = new Conta("1234", "12345", 1000);
    })

    test("Verificar se uma instância da classe Conta está sendo criada.", () => {
        expect(contaMockada instanceof Conta).toBe(true);
    });

    test("Instanciar conta com valores válidos.", () => {
        expect(contaMockada.agencia).toBe("1234");
        expect(contaMockada.conta).toBe("12345");
        expect(contaMockada.saldo).toBe(1000);
    });

    test("Retorna mensagem de sucesso, ao criar conta.", () => {
        expect(contaMockada.criarConta("1234", "12345", 1000)).toBe("Conta criada com sucesso!");
        expect(contaMockada.agencia).toBe("1234");
        expect(contaMockada.conta).toBe("12345");
        expect(contaMockada.saldo).toBe(1000);
    });

    test("Retorna mensagem de erro ao tentar criar conta com dados inválidos.", () => {
        expect(() => contaMockada.criarConta("123456", "123", 1000)).toThrow("Dados inválidos para cadastro.");
    });
});