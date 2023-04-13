const dados = require('./dados.json');
const fs = require('fs');

function menorValor(dados) {
  let menor = null;
  let diaMenor = null;
  for (let i = 0; i < dados.length; i++) {
    if (dados[i].valor !== 0 && (menor === null || dados[i].valor < menor)) {
      menor = dados[i].valor;
      diaMenor = dados[i].dia;
    }
  }
  return { valor: menor, dia: diaMenor };
}

fs.readFile('dados.json', 'utf8', (err, data) => {
  if (err) throw err;
  const dados = JSON.parse(data);
  const result = menorValor(dados);
  console.log(`O menor valor é ${result.valor} no dia ${result.dia}.`);
});

function maiorValor(dados) {
    let maior = null;
    let diaMaior = null;
    for (let i = 0; i < dados.length; i++) {
      if (dados[i].valor !== 0 && (maior === null || dados[i].valor > maior)) {
        maior = dados[i].valor;
        diaMaior = dados[i].dia;
      }
    }
    return { valor: maior, dia: diaMaior };
  }
  
  fs.readFile('dados.json', 'utf8', (err, data) => {
    if (err) throw err;
    const dados = JSON.parse(data);
    const result = maiorValor(dados);
    console.log(`O maior valor é ${result.valor} no dia ${result.dia}.`);
  });

  function diasAcimaDaMedia(dados) {
    // Calcula a média mensal dos valores de faturamento diário
    const somaValores = dados.reduce((acc, curr) => acc + curr.valor, 0);
    const mediaMensal = somaValores / dados.length;
  
    // Percorre os valores diários e conta quantos dias tiveram valor superior à média mensal
    let count = 0;
    for (let i = 0; i < dados.length; i++) {
      if (dados[i].valor > mediaMensal) {
        count++;
      }
    }
    return count;
  }
  
  fs.readFile('dados.json', 'utf8', (err, data) => {
    if (err) throw err;
    const dados = JSON.parse(data);
    const result = diasAcimaDaMedia(dados);
    console.log(`O número de dias no mês em que o valor de faturamento diário foi superior à média mensal é ${result}.`);
  });