const argumentos = process.argv; // para ejecutar por fuera del index.js
const edad = argumentos[2]; // node y el nombre del archivo
const mayoriaDeEdad = 18;
console.log("La edad de la persona es :", edad);

//si, sino
console.log("***Ejemplo 2***");
if (edad >= mayoriaDeEdad) {
  console.log("Es mayor de edad");
} else {
  console.log("Es menor de edad");
}

//anidados
const limiteInferior = 1;
const limiteSuperior = 120;
console.log("*** Ejemplo 3***");
if (edad >= limiteInferior && edad <= limiteSuperior) {
  if (edad >= mayoriaDeEdad) {
    console.log("Es mayor de edad");
  } else {
    console.log("Es menor de edad")
  }
} else {
  console.log("La edad no es validad")
}