const Conta = require('../Conta/Conta');
const Cliente = require('./Cliente');

describe("Testes da classe Cliente", () => {
    let clienteMock;
    let contaMock;

    beforeEach(() => {
        clienteMock = new Cliente();
        contaMock = new Conta();
    })

    test("Verificar se uma instância da classe Cliente está sendo criada.", () => {

        expect(clienteMock instanceof Cliente).toBe(true);
    });

    test("Verificar o cadastro de cliente com dados válidos.", () => {

        expect(clienteMock.registrar("Analu", "5248546859", 5000, contaMock)).toBe("Cliente cadastrado!");
    });

    test("Retornar mensagem de erro quando tentar cadastrar cliente sem uma conta ", () => {

        expect(() => clienteMock.registrar("Analu", "5248546859", 5000, "nao conta")).toThrow("Erro no cadastro - dados inválidos!");
    });
});