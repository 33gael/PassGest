const readlineSync = require("readline-sync");
const colors = require("colors");
const characters = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
const special = "!@#$%^&*?";

const ivd = "Invalid option.";

function menu() {
  console.log("PassGest".bgBlack.red, "by @33gael".green);
  console.log("1 - Generate a password");

  let choix = readlineSync.question("Choose an option : ");
  if (!choix) return;
  choix = parseInt(choix);
  if (choix >= 2) return ivd;
  switch (choix) {
    case 1:
      console.log("1 - Generate a password : ");
      break;
  }
}

function generator() {
  readlineSync.question("Would you generate a password ? (y or n) : ");
  if (generator === 'y')
  {
    readlineSync.question(
      "How many characters would you have in your password ? (y or n) : "
    );
    readlineSync.question(
      "Would you have special characters in your password ? (y or n) : "
    );
  }
  else if (generator != 'y' / 'n') return 0, console.log(ivd); 
}

menu();
generator();
