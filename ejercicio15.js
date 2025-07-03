function obtenerDivisores(minimo, maximo, divisor) {
  const resultado = [];

  for (let i = minimo; i <= maximo; i++) {
    if (i % divisor === 0) {
      resultado.push(i);
    }
  }

  return resultado;
}

// Llamada a la función con valores de ejemplo
const divisores = obtenerDivisores(1, 20, 5);


console.log("Los divisores son:", divisores);
