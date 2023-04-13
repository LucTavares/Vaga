let original = "lucas"; // string a ser invertida
let invertida = ""; // string que irá armazenar a string invertida

// percorre a string original de trás para frente
for (let i = original.length - 1; i >= 0; i--) {
  invertida += original[i]; // adiciona o caractere atual na string invertida
}

console.log(invertida); // imprime a string invertida: "olpmexe"
