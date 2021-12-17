// Funciones que retornan valores
const argumentos = process.argv;
const dividendo = argumentos[2];
const divisor = argumentos[3];

const resultado = division(dividendo, divisor);
console.log("el resultado es: ", resultado);

function division(dividendo, divisor){
  let resultado;
  if(divisor == 0){
    resultado = "ERROR: el divisor debe ser diferente de cero";
  }else{
    resultado = dividendo/divisor
  }
  return resultado;
}