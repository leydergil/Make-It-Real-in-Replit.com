/*
Escribe un programa que piense un número de forma aleatoria y le 
pida al usuario que lo trate de adivinar (como en uno de los 
ejercicios anteriores). La diferencia es que esta vez el usuario 
puede intentar indefinidamente hasta que encuentre el número.
*/

let numeroUsuario;
const numeroAleatorio = Math.floor((Math.random() * 10)+1);

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
