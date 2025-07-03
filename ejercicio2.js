let n1 = 20;
let n2 =70;
let n3 = 40;

//mayor
if (n1 > n2 && n1 > n3) {
    mayor = n1;  
} else if (n2 > n1 && n2 > n3) {
    mayor = n2;  
} else {
    mayor = n3;  
}

//menor
if (n1 < n2 && n1 < n3) {
    menor = n1;  
} else if (n2 < n1 && n2 < n3) {
    menor = n2;  
} else {
    menor = n3; 
}

console.log("el numero mayor es: " + mayor)
console.log("el numero menor es: " + menor)