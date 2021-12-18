//Para ejecutar los ejercicios debo copiarlos en este archivo index.js

const names = ["Pia","German","Leyder","Camilo"]; // Asignamos a names una lista.

let index = 0; // definimos una variable que sirva de indice o contador.
while (index < names.length){ // Iniciamos el ciclo con la condición, que recorrera el arreglo mietras index sea menos que la longitud de la lista.
    const name = names[index]; // asignamos cada nombre a una vrible uno a uno en cada iteración
    console.log(name); // imprimimos
    index++; // Aumentamos el contador.
}

console.log('#########################################');

//const argumentos = process.argv;
let numeroUsuario; //= argumentos[2];
const numeroAleatorio = Math.floor((Math.random() * 10)+1);
console.log (numeroAleatorio);

do{
  numeroUsuario = parseInt(prompt('Adivine el numero del sistema > '));
  console.log(numeroUsuario);
  if(isNaN(numeroUsuario)){
    console.log('Debe ingresar un numero valido');
  }else if(numeroUsuario === numeroAleatorio){
    console.log('Felicidades adivinaste.');
  }else if(numeroUsuario!=numeroAleatorio){
    console.log('Intentalo nuevamente.')
  }
}while(isNaN(numeroUsuario) || numeroUsuario != numeroAleatorio);
