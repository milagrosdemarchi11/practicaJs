let palabra = "vida";
let cantLetras = {}; // objeto vacio

for (let i = 0; i < palabra.length; i++) { // recorro el array segun la cant deletras de la palabra con "length"
    let letra = palabra[i];

    if (cantLetras[letra]) {
        cantLetras[letra]++; // si ya existe, sumo 1
    } else {
        cantLetras[letra] = 1; // si no existe, la agrego con 1
    }
}

// muestro el resultado
console.log(cantLetras);