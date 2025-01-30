function demoTryCatch() {
try {
// Intentionally cause an error:
nonExistentFunction();
} catch (err) {
Logger.log("An error occurred: " + err.message);
}
Logger.log("Script continues running after catching the error.");
}