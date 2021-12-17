//Para ejecutar los ejercicios debo copiarlos en este archivo index.js

const names = ["Pia","German","Leyder","Camilo"]; // Asignamos a names una lista.

let index = 0; // definimos una variable que sirva de indice o contador.
while (index < names.length){ // Iniciamos el ciclo con la condición, que recorrera el arreglo mietras index sea menos que la longitud de la lista.
    const name = names[index]; // asignamos cada nombre a una vrible uno a uno en cada iteración
    console.log(name); // imprimimos
    index++; // Aumentamos el contador.
}
