function verificarTriangulo(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return "none";
  }


  if (a + b <= c || a + c <= b || b + c <= a) {
    return "none";
  }

  if (a === b && b === c) {
    return "equilateral";
  } else if (a === b || b === c || a === c) {
    return "isosceles";
  } else {
    return "scalene";
  }
}

// Exemplos de teste
console.log(verificarTriangulo(2, 2, 2)); // equilateral
console.log(verificarTriangulo(3, 4, 4)); // isosceles
console.log(verificarTriangulo(3, 4, 5)); // scalene
console.log(verificarTriangulo(0, 0, 0)); // none
console.log(verificarTriangulo(1, 1, 3)); // none