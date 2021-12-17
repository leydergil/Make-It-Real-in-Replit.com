//Operador ternario -  es una forma muuy reducida de evaluar una expresión.

const num = 10;

num >= 15 ? console.log("Si") : console.log("es menor que 15");

// Determinar si el número esta dentro de un rango
 const resultado = num >= 0 && num <= 17;
 resultado ? 
 console.log("es menor de edad") 
 : console.log("es mayor de edad");

 //2. evaluar una expresion
 const respuesta = resultado ? "es menor de edad" : "es mayor de edad";
 console.log("respuesta : ", respuesta);

 // Otro ejemplo con la evaluación

 const multiplicacion = resultado ? 5 + 10 : 40 * 2 * 30;
 console.log("multiplicación : ", multiplicacion);

  const multiplicacion2 = !resultado ? 5 + 10 : 40 * 2 * 30;
 console.log("multiplicación2 : ", multiplicacion2);

 // Otro tipo de condicional - Optional Chaining , no funciona en esta versión de repli pero si en la conosla de chrome

 //Volver a ver la grabación del dia 4 para terminar este ejercicio y poder entenderlo mejor.
 
 const persona1 = {
   nombre: "Leyder",
   apellido: "Gil",
   lugarNacimiento: {
     pais: "CO",
     ciudad: "FILADELFIA"
   }
 };
 console.log("la edad de "+persona1.nombre+ " y nacio en : "+persona1.lugarNacimiento.ciudad)