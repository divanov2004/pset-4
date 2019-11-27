const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = 24;

let height = "";

console.log();

do {
  height = Number(readlineSync.question("Height: "));
} while (height < MIN || height > MAX || Number.isNaN(height) || !Number.isInteger(height)){

}
console.log();

for (i = 1; i <= height; i++) {
    row = "";

    for (j = 1; j <= (height - i + 1); j++) {
      if (j == (height - i + 1)) {
        row += "#"
      }
      else {
        row += " ";
      }
    }
    for (k = 1; k <= i; k++) {
      row += "#";
      if (k == i) {
        row += "  #";
        for (l = 1; l <= k; l++) {
          row += "#";
        }
      }
    }
    console.log(row);
  }
