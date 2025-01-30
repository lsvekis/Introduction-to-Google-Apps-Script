function comparisonLogicDemo() {
let x = 5;
let y = "5";

// Strict equality vs. loose equality
Logger.log("x === y: " + (x === y)); // false
Logger.log("x == y: " + (x == y));   // true (but not recommended)

// Logical operators
Logger.log("x is 5 and y is '5': " + (x === 5 && y === "5")); // true
Logger.log("x is 5 or y is 7: " + (x === 5 || y === "7"));    // true
Logger.log("Not x === y: " + !(x === y));                     // true
}