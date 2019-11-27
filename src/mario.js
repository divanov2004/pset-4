const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = 24;

console.log();

let height = "";

do {
  height = Number(readlineSync.question("Height: "));
} while (height < MIN || height > MAX || Number.isNaN(height) || !Number.isInteger(height)){

}

console.log();

for (i = 1; i <= height; i++) {
  row = "";

  for (j = 1; j <= (height - i); j++) {
    row += " ";
    if (j == (height - i)) {
      row += "#"
    }
  }
  for (k = 1; k <= i; k++) {
    row += "#";
  }
  if (i == height) {
    row += "#";
  }
  console.log(row);
}
