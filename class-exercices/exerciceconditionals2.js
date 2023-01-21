let name = prompt("What is your name?");
let action = prompt("What action would you like to perform? (greet, say bye, ask, scream, rest)").toLowerCase();

switch (action) {
  case "greet":
    console.log(`Hello, ${name}!`);
    break;
  case "say bye":
    console.log(`Bye bye, ${name}!`);
    break;
  case "ask":
    console.log(`How are you today, ${name}?`);
    break;
  case "scream":
    console.log("AHHHHHHHH!!!!!!");
    break;
  case "rest":
    console.log("I'm signing off now.");
    break;
  default:
    console.log("I don't know how to do that yet, I'm just a little program :(");
    break;
}