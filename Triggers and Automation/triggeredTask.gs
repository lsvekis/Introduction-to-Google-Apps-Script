function triggeredTask() {
try {
// Intentionally cause an error or do some operation
const val = computeSomething(); // Suppose this fails
} catch (error) {
Logger.log("Error occurred: " + error.message);
GmailApp.sendEmail("admin@example.com", "Trigger Error", "Error details:\n" + error.stack);
}
}

function computeSomething() {
throw new Error("Simulated operation failure.");
}