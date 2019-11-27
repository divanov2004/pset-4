const readlineSync = require("readline-sync");

let positiveInt = NaN;

let factor = "";

let factors = 0;

console.log();

while (positiveInt > Number.MAX_SAFE_INTEGER || positiveInt < 1 || Number.isNaN(positiveInt) == true || positiveInt % 1!= 0){
  positiveInt = Number(readlineSync.question("Positive integer: "));
}

for (i = 1; i < (positiveInt / 2); i++) {
  if (positiveInt % i ==0) {
    factors = positiveInt / i;
    factor = String(factor) + String(i);
  if (i !== factors) {
    factor = String(factor) + ", " + String(factors) + ", ";
  }
  else {
    i = positiveInt
  }
  }
}
console.log("\n" + factor + ".");
