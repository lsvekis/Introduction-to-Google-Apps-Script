function arrayDemo() {
let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map(function(num) {
return num * 2;
});

let evens = numbers.filter(function(num) {
return num % 2 === 0;
});

Logger.log("Original: " + numbers);
Logger.log("Doubled: " + doubled);
Logger.log("Even Numbers: " + evens);
}