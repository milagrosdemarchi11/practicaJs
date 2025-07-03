function encontrarDivisores() {
    let minimo = 1;    // valor mínimo
    let maximo = 10;    // valor máximo
    let divisor = 2;    
  
    let divisores = [];  // Creo una lista vacía donde se guardan los divisores
  
    // Recorre los números del mínimo al máximo
    for (let i = minimo; i <= maximo; i++) {
      if (i % divisor === 0) {  // Si i es divisible por divisor
        divisores[divisores.length] = i;  /* la propiedad length del array, nos dice cuántos elementos tiene el mismo.
        Así que, divisores[divisores.length] = i; agrega i a la siguiente posición disponible del array. */
      }
    }
  
    console.log(divisores);  // imprime resultado
  }
  
  encontrarDivisores();  // llama a la función