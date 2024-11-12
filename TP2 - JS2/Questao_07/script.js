let pergunta = prompt("Qual é a sua pergunta para a enquete?");

let respostas = [];

let contadorSim = 0;
let contadorNao = 0;

while (true) {
  let nome = prompt("Qual é o seu nome?");

  if (nome === "") {
    break;
  }

  let resposta = prompt(pergunta);

  while (resposta.toLowerCase() !== "sim" && resposta.toLowerCase() !== "não") {
    resposta = prompt(
      "Resposta inválida. Por favor, responda com 'Sim' ou 'Não'."
    );
  }

  respostas.push({ nome: nome, resposta: resposta });

  if (resposta.toLowerCase() === "sim") {
    contadorSim++;
  } else {
    contadorNao++;
  }
}

let totalRespostas = contadorSim + contadorNao;
let percentualSim = (contadorSim / totalRespostas) * 100;
let percentualNao = (contadorNao / totalRespostas) * 100;

alert(`Total de respostas: ${totalRespostas}\n
Quantidade de "Sim": ${contadorSim} (${percentualSim.toFixed(2)}%)\n
Quantidade de "Não": ${contadorNao} (${percentualNao.toFixed(2)}%)`);

console.log("Respostas dos participantes:");
respostas.forEach((resposta) => {
  console.log(`${resposta.nome}: ${resposta.resposta}`);
});
