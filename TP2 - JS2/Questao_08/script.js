const algunsCarros = [
    ["Kwid", "Renault"],
    ["Polo", "Volkswagen"],
    ["S10", "Chevrolet"],
    ["March", "Nissan"],
    ["Civic", "Honda"],
    ["Tracker", "Chevrolet"],
    ["T-Cross", "Volkswagen"],
    ["Gol", "Volkswagen"],
    ["Duster", "Renault"],
    ["Onix", "Chevrolet"],
    ["Argo", "Fiat"],
    ["Kicks", "Nissan"],
    ["Fit", "Honda"],
    ["Fiorino", "Fiat"],
    ["Cronos", "Fiat"],
    ["Sandero", "Renault"],
    ["Versa", "Nissan"],
    ["HR-V", "Honda"],
    ["Virtus", "Volkswagen"],
    ["Uno", "Fiat"],
  ];
  
  const contagemMarcas = {};
  
  algunsCarros.forEach(([modelo, marca]) => {
    if (contagemMarcas[marca]) {
      contagemMarcas[marca]++;
    } else {
      contagemMarcas[marca] = 1;
    }
  });
  
  let mensagem = "Quantidade de carros por marca:\n";
  for (const marca in contagemMarcas) {
    mensagem += `${marca}: ${contagemMarcas[marca]}\n`;
  }
  
  alert(mensagem);
  