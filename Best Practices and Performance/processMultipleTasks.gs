function processMultipleTasks() {
const errors = [];

try {
nonExistentFunction1();
} catch (err) {
errors.push("Task 1 failed: " + err.message);
}

try {
nonExistentFunction2();
} catch (err) {
errors.push("Task 2 failed: " + err.message);
}

if (errors.length > 0) {
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheetByName("ErrorLog") || ss.insertSheet("ErrorLog");
errors.forEach(msg => sheet.appendRow([new Date(), msg]));
Logger.log("Errors logged in the 'ErrorLog' sheet.");
}
}