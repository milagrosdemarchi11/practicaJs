let n1 = 3;
let n2 = 15;

if (n1 < n2) {
    for (let i = n1 + 1; i < n2; i++) { // empieza a recorrer hasta el numero 2
        if (i % 3 === 0) { //toma los que sean multiplo de 3
            console.log(i);
        }
    }
} else if (n1 > n2) {
    for (let i = n2 + 1; i < n1; i++) { // va a empezar a recorrer desde un numero mas que n2 y termin antes de n1
        if (i % 3 === 0) { //toma los que sean multiplo de 3
            console.log(i); 
        }
    }
} else {
    console.log("Los números son iguales, no hay elementos entre ellos.");
}