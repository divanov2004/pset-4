const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

let lowerBound = 0;
let upperBound = 0;

let sum = 0;
let i = 0;

console.log()

do {
   lowerBound = Number(readlineSync.question("Lower bound: "))
   upperBound = Number(readlineSync.question("Upper bound: "))
} while (lowerBound > upperBound || lowerBound < MIN || lowerBound > MAX || upperBound < MIN || upperBound > MAX || !Number.isInteger(lowerBound) || !Number.isInteger(upperBound))

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
