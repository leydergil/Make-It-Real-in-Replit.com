/* 
Escribe un programa que le pida al usuario ingresar una frase. El 
programa debe imprimir la frase en la consola 10 veces.

Nota: utiliza un ciclo para imprimir la frase las 10 veces.
*/

const argumentos = process.argv;
const frase = argumentos[2];
let arreglo = [];

for(let index=1; index<= 10; index++){
  //Imprimir la frase 10 veces
  console.log(frase);

  //Probando a poner los elementos en un arreglo
  arreglo.push(frase);
} 
console.log(arreglo);
console.log(arreglo.length)