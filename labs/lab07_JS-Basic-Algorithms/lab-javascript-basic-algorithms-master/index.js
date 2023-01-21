// Iteration 1: Names and Input

// 1.1 Cree una variable hacker1con el nombre del controlador.
// 1.2 Imprimir "The driver's name is XXXX".
// 1.3 Crear una variable hacker2con el nombre del navegador.
// 1.4 Imprimir "The navigator's name is YYYY".

const hacker1 = "The driver last name is Aleix";
console.log(hacker1);

const hacker2 = "The driver first name is Aguilar";
console.log(hacker2);

//*********************************************************************** */
// Iteration 2: Conditionals

console.log("Iteration 002 - Variation 001");

// 2.1. Según el nombre que sea más largo , escriba:
// - The driver has the longest name, it has XX characters.o
// - It seems that the navigator has the longest name, it has XX characters.o
// - Wow, you both have equally long names, XX characters!.

if (hacker1.length > hacker2.length) {
    console.log(`El conductor 1 tiene el nombre mas largo con ${hacker1.length} caracteres.`);
} else if (hacker1.length < hacker2.length) {
  console.log(`El conductor 2 tiene el nombre mas largo que el 1, con ${hacker2.length} caracteres.`);
} else {
  console.log(`Wow! Teneis la misma cantidad de caracteres, con ${hacker1.length} caracteres`);
}

//********************************************************* */
console.log("Iteration 002 - Variation 002 ");
// SYNTAX basado en esta iteracion
// [hacker1.length > hacker2.length][? ""][: ""]
//3 blocks :
// 1. Primer bloque, donde condicionamos codigo
// 2. Segundo bloque, si la condicion inicial es TRUE se ejecuta el codigo dentro del bloque #2
// 3. Tercer bloque, si la condicion inicial es FALSE se ejecuta el codigo dentro del bloque #3

// First Example - 50/50 conditional - Ternary
// console.log("Ternary 50/50 ");

// SYNTAX INICIAL RELACIONADO AL EJERCICIO - 50/50 - Ternary
// hacker1.length > hacker2.length ? "" : "";
// SYNTAX INICIAL RELACIONADO AL EJERCICIO - Multiple Use Cases - Ternary
// hacker1.length > hacker2.length
//   ? ""
//   : hacker1.length === hacker2.length
//   ? ""
//   : hacker2.length >= hacker1.length
//   ? ""
//   : "";

// hacker1.length > hacker2.length
//   ? console.log(
//       `The driver has the longest name, it has ${hacker1.length} characters.`
//     )
//   : console.log(`
// It seems that the navigator has the longest name, it has ${hacker2.length} characters.
// `);

//***************************************************************************** */
console.log("Iteration 002 - Variation 003 ");

// Second Example - Using 2 or more conditions - Ternary
// console.log("Using 2 or more conditions");
// hacker1.length > hacker2.length
//   ? console.log(
//       `The driver has the longest name, it has ${hacker1.length} characters.`
//     )
//   : hacker1.length === hacker2.length
//   ? console.log(
//       `Wow, you both have equally long names, ${hacker2.length} characters!.`
//     )
//   : console.log(`
//   It seems that the navigator has the longest name, it has ${hacker2.length} characters.
//   `);

//URL LINK TO REVIEW = https://www.programiz.com/javascript/ternary-operator

//******************************************************************************* */

// Iteration 3: Loops
console.log("Iteration 003 - Variation 001 ");
// 3.1 Escriba en letra de imprenta los caracteres del nombre del conductor, separados por espacios, y en mayúsculas , es decir, "J O H N".

// 3.2 Escriba todos los caracteres del nombre del navegante, en orden inverso, es decir, "nhoJ".

//PASO 0: TO UPPER CASE PARA PONER EN MAYUSCULA EL NOMBRE
let nombre = "john"
console.log(nombre.toUpperCase()+ " ");

let reservedName = "";
// PASO 1: Usamos el metodo SPLIT para separar una STRING en una ARRAY de caracteres.
// Using the help of native built in methods from arrayMethods [join()] & string methods [split(), toUpperCase()]
const usingSplitMethod = nombre.split("");
console.log(usingSplitMethod);

// Nombramos una nueva variable que concatena split con join/ join une los elementos de una array en una cadena. y metemos el espacio entre medio o lo que queramos.
console.log("Iteration 003 - Using Native Methods ");
const updatedNewName = usingSplitMethod.join(" ").toUpperCase();
console.log(updatedNewName);

//************************************************************************************** */
console.log("Iteration 003 - Using Native Methods & a for loop ");
// // Using a foor loop

for (let i = 0; i < nombre.length; i++) {
//   //   reservedName += newName[i].split("").join(" ").toUpperCase();
  reservedName += nombre[i].toUpperCase() + " ";
}
console.log(reservedName);

//************************************************************************************* */

console.log("Iteration 003 - Using Native Methods & a for OF loop ");
let driverName = "";
for (const aleixName of nombre) {
  driverName += aleixName.toUpperCase() + " ";
}
console.log(driverName);

//Iteration 3.3 - Condicional sencillo
// 3.3 Dependiendo del orden lexicográfico de las cadenas, imprime:

// The driver's name goes first.
// Yo, the navigator goes first definitely.
// What?! You both have the same name?

console.log("Iteration 003.3 - Conditionals ");

if (hacker1 > hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 < hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// ¡Tiempo extra!
// Bono 1:
// Vaya al sitio web del generador de lorem ipsum y:

// Genera 3 párrafos. Almacene el texto en una nueva variable de cadena denominada longText.
// Haga que su programa cuente el número de palabras en la cadena.
// Haga que su programa cuente el número de veces que aparece la palabra latina et.
// Bono 2:
// Cree una nueva variable phraseToChecky haga que contenga algún valor de cadena. Escribe un código que compruebe si el valor que le asignamos a esta variable es un palíndromo . Estos son algunos ejemplos de palíndromos:

// "¡Un hombre, un plan, un canal, Panamá!"
// "Amor, Roma"
// "coche de carreras"
// "gatos de pila"
// "pisar mascotas"
// "gato taco"
// "ponlo arriba"
// "¿Fue un auto o un gato lo que vi?" y "No 'x' en Nixon".
// IMPORTANTE : si usa Google para ayudarlo a encontrar una solución a esta iteración, es posible que encuentre algunas soluciones avanzadas que usan métodos de cadenas o matrices (como join() , reverse() , etc.). Sin embargo, queremos que aplique el conocimiento que tiene actualmente e intente encontrar una solución simplemente usando el forciclo y las if-elsedeclaraciones con algunos breaky continue.

// ¡Feliz codificación! ❤️