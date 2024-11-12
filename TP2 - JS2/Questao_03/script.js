const numerosA = [1, 2, 3];
const numerosB = [4, 5, 6];
const numerosC = [7, 8, 9];

let somaTotal = 0;

function somarArray(array) {
  for (let i = 0; i < array.length; i++) {
    somaTotal += array[i];
  }
}

somarArray(numerosA);
somarArray(numerosB);
somarArray(numerosC);

console.log("Somatória Total: " + somaTotal);
