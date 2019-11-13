const readlineSync = require("readline-sync");

const lowerBound = readlineSync.question("\nLower bound: ");
const upperBound = readlineSync.question("Upper bound: ");

let evenSum = 0

let MIN = Number.MIN_SAFE_INTEGER;
let MAX = Number.MAX_SAFE_INTEGER;

while (lowerBound > upperBound) {
  lowerBound = Number(readlineSync.question("Lower bound: "));
  upperBound = Number(readlineSync.question("Upper bound: "));
}
