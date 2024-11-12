let incremento = parseInt(
    prompt("Informe o valor do incremento (entre 1 e 10):")
  );
  
  if (isNaN(incremento) || incremento < 1 || incremento > 10) {
    console.log("Por favor, insira um número entre 1 e 10.");
  } else {
    let contador = 0;
  
    while (contador <= 50) {
      console.log(contador);
      contador += incremento;
    }
  }
  