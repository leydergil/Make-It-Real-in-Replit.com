const argumentos = process.argv;
const sexo = argumentos[2];
let respuesta;

switch(sexo){
  case "F":
    respuesta = ("Es Femenino");
  break;
  case "M":
    respuesta = ("Es masculino");
  break;
  default:
    respuesta = "No definido";
}
console.log("La respuesta es : ", respuesta);