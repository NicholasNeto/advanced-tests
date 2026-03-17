#!/usr/bin/env node

const { spawn } = require("child_process");
const path = require("path");

// Pega o argumento da linha de comando (nome da pasta)
const testFolder = process.argv[2] || "unit-test";

// Constrói o caminho para os testes
const testPath = `${testFolder}/test/**/*.test.js`;

console.log(`🧪 Executando testes em: ${testPath}`);

// Executa o mocha com o caminho especificado
const mocha = spawn("npx", ["mocha", testPath], {
  stdio: "inherit",
  cwd: process.cwd(),
});

mocha.on("close", (code) => {
  process.exit(code);
});

mocha.on("error", (err) => {
  console.error("Erro ao executar os testes:", err);
  process.exit(1);
});
