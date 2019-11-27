const readlineSync = require("readline-sync");

let sum = 0
let integer = 0

console.log();

do {
      integer = Number(readlineSync.question("Positive integer: "));
} while (integer < 1 || integer > Number.MAX_SAFE_INTEGER || Number.isNaN(integer) || !Number.isInteger(integer));

while (integer > 0) {

  let value = (integer % 10)
  integer = Math.floor(integer / 10)

  if (value % 2 === 1) {
    sum = sum + value;
  } else if (value % 2 === 0){
    continue;
  } else {
    continue;
  }

}
console.log("\n" + sum + ".");
