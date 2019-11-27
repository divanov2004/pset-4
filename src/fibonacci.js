const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = 78;

let fibinacci = 0
let loop = false;

console.log();

while (loop === false) {
    fibinacci = Number(readlineSync.question("Positive Integer: "));

    if (Number.isNaN(fibinacci) || fibinacci % 1 !== 0 || fibinacci < MIN || fibinacci > MAX) {
    } else {
        loop = true;
    }
}

let fibb = 0;
let a = 0;
let b = 1;

if (fibinacci === 1) {
    fibb = 0;
}

for (let i = 2; i <= fibinacci; i++) {
    fibb = a + b;
    a = b;
    b = fibb;
}

fixedFibbonacci = fibb.toLocaleString("en");
console.log("\n" + fixedFibbonacci + ".");
