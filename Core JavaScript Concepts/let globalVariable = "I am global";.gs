let globalVariable = "I am global";

function scopeDemo() {
let localVariable = "I am local";

Logger.log(globalVariable); // Accessible
Logger.log(localVariable);  // Accessible here
}

function anotherFunction() {
Logger.log(globalVariable); // Still accessible
// Logger.log(localVariable); // Would cause an error if uncommented
}