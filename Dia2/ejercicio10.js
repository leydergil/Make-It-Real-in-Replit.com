/*
El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que 
determina la cantidad de grasa de una persona.

El BMI se calcula con la siguiente formula:

peso / altura^2

Escribe un programa que le pida al usuario su peso y altura. El programa deberá 
calcular el BMI e imprimir:

"Bajo de peso" si el BMI < 18.5
"Normal" si está entre 18.5 y 24.9
"Sobrepeso" si está entre 25 y 29.9
"Obeso" si es igual o mayor a 30
*/

let weight, height, keepOn, imc;

while (keepOn != 0){
  weight = parseFloat(prompt("Por favor ingrese su peso en Kg. - Eje: 80.7 : "));
  height = parseFloat(prompt("Por favor ingrese su estatura en Mts. Eje: 1.73 : "));
  bodyMassIndex(weight, height);
  resultadoBodyMassIndex(imc);
  
  keepOn = parseInt(prompt("Ingrese - 1: Continuar - 0: Salir\n"));
}

function bodyMassIndex(w,h){
  imc = (w / (Math.pow(h, 2)));
  console.log(`Tu IMC es: ${imc.toFixed(2)}`)
}

function resultadoBodyMassIndex(imc){
  if (imc < 18.5){
    console.log("Tienes bajo peso\n");
  }else if (imc >= 18.5 && imc <= 24.9){
    console.log("Estas Normal\n");
  }else if(imc >= 25 && imc <= 29.9){
    console.log("Tienes Sobrepeso\n");
  }else{
    console.log("Estas Obeso\n")
  }
}