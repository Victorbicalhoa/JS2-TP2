const primeiroValor = parseFloat(prompt("Digite o primeiro valor:"));
const segundoValor = parseFloat(prompt("Digite o segundo valor:"));
const terceiroValor = parseFloat(prompt("Digite o terceiro valor:"));

const somarTresNumeros = (numero1, numero2, numero3) =>
  numero1 + numero2 + numero3;

const resultadoSoma = somarTresNumeros(
  primeiroValor,
  segundoValor,
  terceiroValor
);

console.log("A soma dos três números é: " + resultadoSoma);
