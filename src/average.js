const readlineSync = require("readline-sync");

const MAX = Number.MAX_SAFE_INTEGER;
const MIN = 0;

console.log();

let integer = 0;
let sum = 0;
let amount = 0;

do {
  integer = Number(readlineSync.question("Non-negative integer: "));
  if (integer >= MIN && integer < MAX && Number.isInteger(integer)) {
    sum = sum + integer;
    amount = amount + 1;
  }
} while (integer > 0);


let average = (sum / amount).toLocaleString("en", { minimumFractionDigits: 3, maximumFractionDigits: 3});

console.log("\n" + average + ".");
