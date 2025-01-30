function debugWithBreakpoints() {
let counter = 0;
counter += 5;  // Set a breakpoint here
counter *= 2;  // Then step over this line
Logger.log("Final counter value: " + counter);
}