# 🧪 Advanced Tests - Repositório de Estudos

Um repositório dedicado ao estudo e prática de **testes automatizados** e **cobertura de código** em JavaScript, explorando diferentes cenários como testes assíncronos, objetos complexos, mocks, stubs e muito mais.

## 📋 Sobre o Projeto

Este repositório foi criado para aprofundar conhecimentos em:

- ✅ **Testes Unitários** - Funções e métodos isolados
- 🔄 **Testes Assíncronos** - Promises, async/await, callbacks
- 📊 **Cobertura de Código** - Análise de quanto código está sendo testado
- 🎭 **Mocks e Stubs** - Simulação de dependências externas
- 🏗️ **Testes de Objetos** - Estruturas de dados complexas
- 🌐 **Testes de Integração** - Comunicação entre módulos
- 📈 **Diferentes Cenários** - Edge cases, erros e validações

## 🛠️ Tecnologias Utilizadas

- **[Mocha](https://mochajs.org/)** - Framework de testes
- **[Chai](https://www.chaijs.com/)** - Biblioteca de asserções
- **[Sinon](https://sinonjs.org/)** - Mocks, spies e stubs
- **[Node.js](https://nodejs.org/)** - Ambiente de execução

## 📁 Estrutura do Projeto

```
advanced-tests/
├── 📄 package.json          # Configurações e dependências
├── 🔧 test-runner.js        # Script personalizado para execução
├── 📖 README.md             # Documentação do projeto
├──
├── 🧮 unit-test/            # Testes básicos e funções simples
│   ├── src/
│   │   └── calculadora.js   # Funções de cálculo
│   └── test/
│       └── calculadora.test.js
├──
├── ⚡ async-test/           # Testes assíncronos
│   ├── src/
│   │   └── asyncUtils.js    # Funções com promises/async
│   └── test/
│       └── asyncUtils.test.js
├──
└── 🔜 (Futuras pastas)
    ├── integration-test/    # Testes de integração
    ├── mock-test/          # Testes com mocks e stubs
    ├── object-test/        # Testes com objetos complexos
    └── coverage-test/      # Análise de cobertura
```

## 🚀 Como Executar

### Instalação

```bash
# Clone o repositório
git clone <url-do-repositorio>

# Entre na pasta
cd advanced-tests

# Instale as dependências
npm install
```

### Executando os Testes

#### Scripts Disponíveis:

```bash
# Executa testes unitários (padrão)
npm test

# Executa testes unitários específicos
npm run test:unit

# Executa testes assíncronos
npm run test:async

# Executa todos os testes de todas as pastas
npm run test:all
```

#### Script Personalizado:

```bash
# Executa testes de qualquer pasta
node test-runner.js <nome-da-pasta>

# Exemplos:
node test-runner.js unit-test
node test-runner.js async-test
```

## 📚 Conteúdo de Estudos

### 1. 🧮 Testes Unitários (`unit-test/`)

- Testes básicos de funções
- Validação de entrada e saída
- Casos de borda (edge cases)

### 2. ⚡ Testes Assíncronos (`async-test/`)

- Testes com `async/await`
- Promises e timing
- Simulação de APIs externas

### 3. 🎭 Mocks e Stubs (Em breve)

- Simulação de dependências
- Spies para monitoramento
- Stubbing de métodos

### 4. 🏗️ Testes de Objetos (Em breve)

- Validação de estruturas complexas
- Deep equality
- Propriedades aninhadas

### 5. 📊 Cobertura de Código (Em breve)

- Análise de linhas cobertas
- Relatórios de cobertura
- Metas de qualidade

## 🎯 Objetivos de Aprendizado

- [x] Configurar ambiente de testes
- [x] Escrever testes unitários básicos
- [x] Implementar testes assíncronos
- [ ] Dominar mocks e stubs
- [ ] Testar objetos complexos
- [ ] Configurar cobertura de código
- [ ] Implementar testes de integração
- [ ] Automatizar execução de testes
- [ ] Aplicar TDD (Test Driven Development)

## 📖 Recursos e Referências

- [Documentação do Mocha](https://mochajs.org/)
- [Chai Assertion Library](https://www.chaijs.com/)
- [Sinon.js Documentation](https://sinonjs.org/)
- [JavaScript Testing Best Practices](https://github.com/goldbergyoni/javascript-testing-best-practices)

## 🤝 Contribuindo

Este é um projeto de estudos pessoais, mas sugestões e melhorias são bem-vindas!

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença ISC. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---
