function customLogger(message) {
const timestamp = new Date().toISOString();
Logger.log("[" + timestamp + "] " + message);
}

function demoCustomLogger() {
customLogger("Script started");
// ... some process ...
customLogger("Script finished");
}