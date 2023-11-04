//início do projeto ---> pensar primeiro no que eu vou precisar testar; depois desenvolver a implementação.

const Conta = require('../Conta/Conta');
const Cliente = require('./Cliente');

describe("Testes da classe Cliente", () => {
    test("Verificar se uma instância da classe Cliente está sendo criada.", () =>{
        const cliente = new Cliente ();
        
        // expect(cliente).toBeInstanceOf(Cliente);
        expect(cliente instanceof Cliente).toBe(true);
        //nesse exemplo, ambos testam a mesma coisa, só a sintaxe que é diferente.
    });

    test("Verificar o cadastro de cliente com dados válidos.", () => {
        const cliente = new Cliente();
        const conta = new Conta();


        expect(cliente.registrar("Analu", "5248546859", 5000, conta)).toBe("Cliente cadastrado!"); //vai retornar erro, as implementações não estão prontas.

    });

    test("Retorne mensagem de erro quando tenta cadastrar cliente sem uma conta ", () => {
        const cliente = new Cliente();
        expect(() => cliente.registrar("Analu", "5248546859", 5000, "nao conta")).toThrow("Erro no cadastro - dados inválidos!");
    });

});