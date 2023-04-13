function verificarFibonacci() {
    const numero = parseInt(document.getElementById("inputNumero").value);
    if (numero < 0) {
      document.getElementById("resultado").textContent = "Digite um número positivo";
    } else if (numero === 0 || numero === 1) {
      document.getElementById("resultado").textContent = "O número pertence à sequência de Fibonacci";
    } else {
      let a = 0;
      let b = 1;
      let c = a + b;
      while (c < numero) {
        a = b;
        b = c;
        c = a + b;
      }
      if (c === numero) {
        document.getElementById("resultado").textContent = "O número pertence à sequência de Fibonacci";
      } else {
        document.getElementById("resultado").textContent = "O número não pertence à sequência de Fibonacci";
      }
    }
  }
  