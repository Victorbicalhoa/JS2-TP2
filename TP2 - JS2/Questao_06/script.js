const frase =
  "the only thing necessary for the triumph of evil is for good men to do nothing";

const palavras = frase.split(" ");
let novaFrase = "";

for (let indice in palavras) {
  palavras[indice] =
    palavras[indice][0].toUpperCase() + palavras[indice].slice(1);
}

novaFrase = palavras.join(" ");

console.log(novaFrase);
