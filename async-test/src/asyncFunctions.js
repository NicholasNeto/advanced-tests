// Função com callback
function fetchData(callback) {
  // Simula uma operação assíncrona (como uma requisição HTTP)
  setTimeout(() => {
    callback("dados recebidos");
  }, 100); // 100ms de delay
}

// Função que retorna uma Promise
function fetchDataPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("dados recebidos");
    }, 100);
  });
}

// Função async/await
async function fetchDataAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("dados recebidos");
    }, 100);
  });
}

module.exports = {
  fetchData,
  fetchDataPromise,
  fetchDataAsync,
};
