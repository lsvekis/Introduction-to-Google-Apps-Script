// utility.gs
function formatMessage(name) {
return "Hello, " + name + "!";
}

// main.gs
function demonstrateReuse() {
const greeting = formatMessage("Alice");
Logger.log(greeting); // "Hello, Alice!"
}