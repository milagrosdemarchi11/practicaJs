let numeros = [50, 253, 1, 33, 422];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) { // evalúa solo el número
        suma = suma + numeros[i]; // Acumula si es par
    }
}

console.log("La suma de los pares es:", suma);