/* 
Escribe un programa que le pida al usuario ingresar una frase. El 
programa debe imprimir la frase en la consola 10 veces.

Nota: utiliza un ciclo para imprimir la frase las 10 veces.
*/

const argumentos = process.argv;
const num = argumentos[2];
let arreglo = [];

for(let index=1; index<= num; index++){
  //Imprimir los números de acuerdo al n´´umero ingresado
  console.log(index);

  //Probando a poner los elementos en un arreglo
  arreglo.push(index);
} 
console.log(arreglo);
console.log(arreglo.length)