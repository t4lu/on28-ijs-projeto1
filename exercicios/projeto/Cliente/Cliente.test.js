const Conta = require('../Conta/Conta');
const Cliente = require('./Cliente');

describe("Testes da classe Cliente", () => {
    let clienteMock;
    let contaMock;

    beforeEach(() => {
        clienteMock = new Cliente();
        contaMock = new Conta();
    })

    test("Deve verificar se uma instância da classe Cliente está sendo criada.", () => {

        expect(clienteMock instanceof Cliente).toBe(true);
    });

    test("Deve verificar o cadastro de cliente com dados válidos.", () => {

        expect(clienteMock.registrarCliente("Analu", "5248546859", 5000, contaMock)).toBe("Cliente cadastrado!");
    });

    test("Deve retornar mensagem de erro quando tentar cadastrar cliente sem uma conta ", () => {

        expect(() => clienteMock.registrarCliente("Analu", "5248546859", 5000, "nao conta")).toThrow("Erro no cadastro - dados inválidos!");
    });
});