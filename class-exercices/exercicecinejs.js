// function PrecioEntrada(edad) {
//     let precio = prompt("Cual es tu edad?");
//     switch (true) {
//       case edad <= 5:
//         precio = 0;
//         break;
//       case edad > 5 && edad <= 15:
//         precio = 20;
//         break;
//       case edad > 15 && edad <= 60:
//         precio = 50;
//         break;
//       case edad > 60:
//         precio = 30;
//         break;
//       default:
//         precio = 50;
//     }
//     return precio;
//   }

const age = parseInt(prompt("Welcome to Phenomena - How old are you?"));
if (age <= 5) {
    console.log("You are just a baby, you get in for free");
}
else if (age > 5 && age < 15) {
    console.log("You fall under the age group that receives 20% discount");
}
else if (age >= 15 && age <=60) {
    console.log("you fall under the age group");
}
else if (age > 60){
    console.log("your receives 40% discount");
}