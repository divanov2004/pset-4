const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;

let positiveInt = Number(readlineSync.question("\nPositive Integer: "));
let reversed = "";
let number = 0

while (positiveInt < MIN || positiveInt > MAX || Number.isNaN(positiveInt) || !Number.isInteger(positiveInt)) {
  positiveInt = Number(readlineSync.question("Positive Integer: "));
}

do {
  number = positiveInt % 10;
  reversed = reversed + number + ", ";
  positiveInt = positiveInt - number
  positiveInt = positiveInt/10;
} while (positiveInt > 10);

reversed = reversed + positiveInt + "."

console.log("\n" + reversed);
