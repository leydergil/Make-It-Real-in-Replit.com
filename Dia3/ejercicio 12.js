/* 
Escribe un programa que le pida al usuario ingresar una frase. El 
programa debe imprimir la frase en la consola 10 veces.

Nota: utiliza un ciclo para imprimir la frase las 10 veces.
*/

const argumentos = process.argv;
const num = argumentos[2];
let arreglo = [];

for(let index=1; index<= num; index++){
  console.log(index);

  arreglo.push(index);
} 
console.log(arreglo);
console.log(arreglo.length)

