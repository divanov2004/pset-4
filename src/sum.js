const readlineSync = require("readline-sync");

let lowerBound = Number(readlineSync.question("\nLower bound: "));
let upperBound = Number(readlineSync.question("Upper bound: "));

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;
let sum = 0;
let i = 0;

do {
   lowerBound = Number(readlineSync.question("Lower bound: "));
   upperBound = Number(readlineSync.question("Upper bound: "));
} while (lowerBound > upperBound);

if (lowerBound % 2 === 0) {
  for (let i = lowerBound; i <= upperBound; i = i + 2){
    sum = i + sum;
  }
}

else if (lowerBound % 2 !== 0) {
  for (let i = lowerBound + 1; i <= upperBound; i = i + 2){
    sum = i + sum;
  }
}

function thousands_separators(num)
  {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }
  console.log(thousands_separators("\n" + sum + "."));
