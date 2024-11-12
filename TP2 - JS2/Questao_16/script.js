let incremento = parseInt(
    prompt("Digite um número entre 1 e 10 para o incremento:")
  );
  
  while (incremento < 1 || incremento > 10 || isNaN(incremento)) {
    incremento = parseInt(prompt("Digite um número válido entre 1 e 10:"));
  }
  
  let contador = 0;
  
  while (contador <= 50) {
    console.log(contador);
    contador += incremento;
  }
  