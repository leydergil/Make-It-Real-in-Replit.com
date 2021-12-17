/*
Escribe un programa para la consola que le pida al usuario un número 
e imprima los números desde 1 hasta el número.

Por ejemplo, si el usuario ingresa el número 5, el programa de be 
imprimir:

1
2
3
4
5
*/

const argumentos = process.argv;
const numero = argumentos[2];
let index = 1;

while(index <= numero){
  console.log(`${index}`);
  index++;
}