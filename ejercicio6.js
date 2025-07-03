let n1 = 4;
let n2 = 10;

if (n1 < n2) {
    for (let i = n1 + 1; i < n2; i++) { // va a empezar a recorrer desde un numero mas que n1 y termina antes de n2
        console.log(i);
    }
} else if (n1 > n2) {
    for (let i = n2 + 1; i < n1; i++) { // va a empezar a recorrer desde un numero mas que n2 y termin antes de n1
        console.log(i);
    }
} else {
    console.log("el numero era el mismo, no hay elementos que los separen.");
}