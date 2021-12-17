/* 
Escribe un programa que le pida al usuario una frase y un número. El 
programa debe imprimir la frase en la consola el número de veces que 
ingresó el usuario.

Por ejemplo, si el usuario ingresó la frase "Hola Mundo" y el número 
5, el programa debe imprimir "Hola Mundo" 5 veces:
*/

const argumentos = process.argv;
const frase = argumentos[2];
const cantidad = argumentos[3];

for(let index=1; index<=cantidad; index++){
  console.log(`Iteracion ${index}: ${frase}`);
}