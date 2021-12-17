const argumentos = process.argv;
const nombre = argumentos[2];
saludar(nombre);

function saludar(nombre){
  console.log("Hola ",nombre,"!");
}

//Otra forma con return

const saludo = saludar2(nombre);
console.log(saludo);

function saludar2(nombre){
  return "Hola ",nombre,"!";
}