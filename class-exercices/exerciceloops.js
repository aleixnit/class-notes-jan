// ------------- Ejercicio 1 (for loop): -------------
// Crea un for loop que cuente de 0 a 100 i en cada iteración sume el valor actual a un resultado total. Al final haz un console.log que printee el resultado.

// let loop = 0;
// for (let iterator = 0; iterator <= 100; iterator++) {
//     loop += iterator;
//     console.log(iterator);
// }
// console.log(loop);

// ------------- Ejercicio 2 (for loop): -------------
// Crea un array de números llamado "numbers" con valores aleatorios. Utiliza un for loop para recorrer el array y encontrar el número mayor y el número menor. Imprime ambos números en la consola.

// ------------- Ejercicio 3 (while loop): -------------
// Utiliza un bucle while para imprimir los números pares del 2 al 20.

// let i = 2;
// while (i <= 20) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
//     i++;
// }

// ------------- Ejercicio 4 (do while): -------------
//Crea una variable llamada "numeroAdivinar" con un número entero entre 1 y 10 (puedes asignarle un valor manualmente).
// Crea una variable llamada "numeroIngresado" y asignale el valor 0.
// Utiliza un bucle do...while para asignar a la variable "numeroIngresado" un número entero obtenido de un array de números [1,2,3,4,5,6,7,8,9,10]. El bucle debe continuar hasta que "numeroIngresado" sea igual a "numeroAdivinar".
// Una vez que el bucle finaliza, imprime en la consola el número de iteraciones realizadas.

let numeroAdivinar = 10;
let numeroIngresado = 0;

const miFuncion = (name, age, livesIn) => {
    let location = livesIn.livesInCity ? "la ciudad" : "un pueblo";
    return `${name} tiene ${age} años y vive en ${location}.`;
  };
  console.log(miFuncion("Jarko", 25, {livesInCity: true, livesInTown: false}));
  console.log(miFuncion("Martina", 42, {livesInCity: false, livesInTown: true}));
  console.log(miFuncion("Laia", 78, { livesInCity: false, livesInTown: true }));

