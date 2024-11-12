let texto = prompt("Digite um texto para ser invertido:");
let textoInvertido = "";

let i = texto.length - 1;

while (i >= 0) {
  textoInvertido += texto[i];
  i--;
}

console.log("Texto invertido:", textoInvertido);
