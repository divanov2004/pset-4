const readlineSync = require("readline-sync");

const MIN = 1000000000000;
const MAX = 9999999999999999;

let cardNumber;

console.log();

do {
    cardNumber = Number(readlineSync.question("Number: "));
} while (Number.isNaN(cardNumber) || cardNumber % 1 !== 0 || cardNumber < MIN || cardNumber > MAX);

let cardString = String(cardNumber);
let cardLength = cardString.length;
let sumCheck = 0;

for (let i = cardLength - 2; i >= 0; i = i - 2) {
    let number = cardString.charAt(i);
    let numberXTwo = Number(number) * 2;
    let numberString = String(numberXTwo);
    let numberStringLength = numberString.length;
    if (numberStringLength > 1) {
        let a = Number(numberString.charAt(0));
        let b = Number(numberString.charAt(1));
        sumCheck = sumCheck + a + b;
    } else {
        sumCheck = sumCheck + numberXTwo;
    }
} for (let i = cardLength - 1; i >= 0; i = i - 2) {
    let otherNumber = cardString.charAt(i);
    let otherNumberNumber = Number(otherNumber);
    sumCheck = sumCheck + otherNumberNumber;
}

const SUM_CHECK = String(sumCheck);
const LAST_NUMBER_MEASURE = SUM_CHECK.length - 1;
const LAST_NUMBER = SUM_CHECK.charAt(LAST_NUMBER_MEASURE);

if (LAST_NUMBER == "0") {
    if (cardLength == 15 && cardString.charAt(0) == "3" && (cardString.charAt(1) == "4" || cardString.charAt(1) == "7")) {
        console.log("\nAmex.");
    } else if (cardLength == 16 && cardString.charAt(0) == "5" && (cardString.charAt(1) == "1" || cardString.charAt(1) == "2" || cardString.charAt(1) == "3" || cardString.charAt(1) == "4" || cardString.charAt(1) == "5")) {
        console.log("\nMastercard.");
    } else if (cardLength >= 13 && cardLength <= 16 && cardString.charAt(0) == "4") {
        console.log("\nVisa.");
    } else {
        console.log("\nInvalid.");
    }
} else {
    console.log("\nInvalid.");
}
