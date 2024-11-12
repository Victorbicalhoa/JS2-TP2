function ehPalindromo(palavra) {
    palavra = palavra.toLowerCase();
  
    let palavraInvertida = palavra.split("").reverse().join("");
  
    return palavra === palavraInvertida;
  }
  
  console.log(ehPalindromo("radar"));
  console.log(ehPalindromo("Ana"));
  console.log(ehPalindromo("computador"));
  