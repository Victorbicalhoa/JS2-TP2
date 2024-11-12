let listaCompras = [];
let totalCompra = 0;

do {
  let nomeProduto = prompt(
    "Informe o nome do produto (ou deixe vazio para encerrar):"
  );

  if (!nomeProduto) break;

  let precoProduto = parseFloat(prompt("Informe o preço do produto:"));

  if (!isNaN(precoProduto)) {
    listaCompras.push({ nome: nomeProduto, preco: precoProduto });
    totalCompra += precoProduto;
  } else {
    alert("Preço inválido. Tente novamente.");
  }
} while (true);

let mensagem = "Lista de Compras:\n";
listaCompras.forEach((item) => {
  mensagem += `- ${item.nome}: R$ ${item.preco.toFixed(2)}\n`;
});
mensagem += `\nTotal da compra: R$ ${totalCompra.toFixed(2)}`;

alert(mensagem);
