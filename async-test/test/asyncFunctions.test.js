const {
  fetchData,
  fetchDataPromise,
  fetchDataAsync,
} = require("../src/asyncFunctions");
const { expect } = require("chai");

describe("Testes de Funções Assíncronas", () => {
  describe("Função com Callback", () => {
    it('deve retornar "dados recebidos" via callback', (done) => {
      fetchData((resultado) => {
        try {
          expect(resultado).to.equal("dados recebidos");
          done(); // Chama done() para indicar que o teste terminou
        } catch (error) {
          done(error); // Passa o erro para o done() se houver falha
        }
      });
    });
  });

  describe("Função com Promise", () => {
    it('deve retornar "dados recebidos" usando Promise', () => {
      return fetchDataPromise().then((resultado) => {
        expect(resultado).to.equal("dados recebidos");
      });
    });

    it('deve retornar "dados recebidos" usando async/await', async () => {
      const resultado = await fetchDataPromise();
      expect(resultado).to.equal("dados recebidos");
    });
  });

  describe("Função Async/Await", () => {
    it('deve retornar "dados recebidos" com async/await', async () => {
      const resultado = await fetchDataAsync();
      expect(resultado).to.equal("dados recebidos");
    });
  });

  describe("Testando Erros Assíncronos", () => {
    it("deve capturar erro em Promise rejeitada", async () => {
      const promiseComErro = () => {
        return Promise.reject(new Error("Erro simulado"));
      };

      try {
        await promiseComErro();
        // Se chegou aqui, o teste deve falhar
        expect.fail("Deveria ter lançado um erro");
      } catch (error) {
        expect(error.message).to.equal("Erro simulado");
      }
    });

    // it("deve capturar erro usando expect().to.be.rejected", async () => {
    //   const promiseComErro = () => {
    //     return Promise.reject(new Error("Erro simulado"));
    //   };

    //   await expect(promiseComErro()).to.be.rejected;
    // });
  });
});
