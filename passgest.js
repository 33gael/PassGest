const readlineSync = require("readline-sync");
const colors = require("colors");
const characters = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
const special = "!@#$%^&*?";

let ivd = "Invalid option.";

function menu() {
  console.log("PassGest".bgBlack.red, "by @404novichok_".green);
  console.log("1 - Generate a password");
  console.log("2 - View saved password");

  let choix = readlineSync.question("Choose an option : ");
  if (!choix) return;
  choix = parseInt(choix);
  if (choix > 2) return ivd;
  switch (choix) {
    case 1:
      console.log("1 - Generate a password : ");
      break;
    case 2:
      console.log("2 - View saved password : ");
      break;
    default:
      console.log(ivd);
  }
}

function generator() {
  readlineSync.question("Would you generate a password ? (y or n) : ");
  if (generator != y / n) return 0, console.log(ivd);
  readlineSync.question(
    "How many characters would you have in your password ? (y or n) : "
  );
  readlineSync.question(
    "Would you have special characters in your password ? (y or n) : "
  );
}

menu();
generator();
