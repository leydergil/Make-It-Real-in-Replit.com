// Los Objetos se definen dentro de una llave.

const miObjeto = {
  "atributo1": "valor",
};
console.log(miObjeto.atributo1);
console.log("\n");

const persona = {
  nombre: "Leyder",
  apellido: "Gil",
  fechaNacimiento: "13/05/1980",
  telefono: ["3116108836", ["3226143055"]],
  nacionalidad: ["CO", "ES"],
  idiomas: ["ES", "EN", "IT"]
}
console.log("La persona se llama: "+persona.nombre+" "+persona.apellido);
console.log("Su nacionalidad es : "+persona.nacionalidad[1]);
// Tambien puedo acceder a los atributos como si fuese un arreglo
console.log("La persona se nacio en: "+persona["fechaNacimiento"]);

// for para recorrer un arreglo
console.log("Ciclos");
for (let llave in persona){
  console.log(persona[llave]);
}

console.log("Ciclos en persona");
for (let indice = 0; indice <= persona.length; indice++){
  for (let llave in personas[indice]){
    console.log(persona[indice][llave]);
  }
}