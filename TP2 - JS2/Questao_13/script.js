let quantidade = parseInt(prompt("Quantos números você deseja sortear?"));

if (isNaN(quantidade) || quantidade <= 0) {
  console.log("Por favor, insira um número válido.");
} else {
  console.log("Números sorteados:");

  for (let i = 0; i < quantidade; i++) {
    let numeroAleatorio = Math.ceil(Math.random() * 60);

    console.log(numeroAleatorio);
  }
}