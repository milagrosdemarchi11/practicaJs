let personas = [
     { nombre: "Milagros", sexo: "f", edad: 20 },
    { nombre: "Natalia", sexo: "f", edad: 19 },
    { nombre: "Marcelo", sexo: "m", edad: 43 },
    { nombre: "Ismael", sexo: "m", edad: 43 },
    { nombre: "Jorge", sexo: "m", edad: 10 }
];

// Función para mostrar el promedio general de edad
function mostrarPromedioGeneral(personas) {
    let suma = 0;
    for (let i = 0; i < personas.length; i++) {
        suma = suma + personas[i].edad; // acumulo las edades
    }

    let promedio = 0;
    if (personas.length > 0) {
        promedio = suma / personas.length;
    }

    console.log("Promedio de edad general:", promedio);
}

// Función para mostrar el nombre de la mujer con mayor edad
function mostrarMujerMayor(personas) {
    let mayorF = 0;
    let nombreMayor = "";

    for (let i = 0; i < personas.length; i++) {
        let persona = personas[i];

        if (persona.sexo === "f") { 
            if (mayorF === 0 || persona.edad > mayorEdad) { // Si no hay ninguna o si esta es mayor que la anterior
                mayorEdad = persona.edad;
                nombreMayor = persona.nombre;
            }
        }
    }

    console.log("Mujer con mayor edad:", nombreMayor);
}

// Función para mostrar el nombre del hombre con menor edad
function mostrarHombreMenor(personas) {
    let menorM = 0;
    let nombreMenor = "";

    for (let i = 0; i < personas.length; i++) {
        let persona = personas[i];

        if (persona.sexo === "m") {
            // Si no hay ninguno o si esta edad es menor
            if (menorM === 0 || persona.edad < menorM) {
                menorM = persona.edad;
                nombreMenor = persona.nombre;
            }
        }
    }

    console.log("Hombre con menor edad:", nombreMenor);
}

// Función para mostrar el promedio de edad de las mujeres
function mostrarPromedioMujeres(personas) {
    let suma = 0;
    let cantidad = 0;

    for (let i = 0; i < personas.length; i++) {
        if (personas[i].sexo === "f") {
            suma = suma + personas[i].edad;
            cantidad = cantidad + 1;
        }
    }

    let promedio = 0;
    if (cantidad > 0) {
        promedio = suma / cantidad;
    }

    console.log("Promedio de edad de mujeres:", promedio);
}


mostrarPromedioGeneral(personas);
mostrarMujerMayor(personas);
mostrarHombreMenor(personas);
mostrarPromedioMujeres(personas);