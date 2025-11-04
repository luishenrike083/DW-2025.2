function calcular(valor1, valor2, operador) {
  let resultado;

  switch (operador) {
    case '+':
      resultado = valor1 + valor2;
      break;
    case '-':
      resultado = valor1 - valor2;
      break;6
    case '*':
      resultado = valor1 * valor2;
      break;
    case '/':
      if (valor2 !== 0) {
        resultado = valor1 / valor2;
      } else {
        return 'Erro: divisão por zero!';
      }
      break;
    default:
      return 'Erro: operador inválido!';
  }

  return resultado;
}

// Exemplos de uso
console.log(calcular(1, 1, '+')); 
console.log(calcular(1, 1, '-')); 
console.log(calcular(1, 1, '*')); 
console.log(calcular(1, 1, '/')); 