function logErrorToSheet(error) {
const ss = SpreadsheetApp.getActiveSpreadsheet();
let logSheet = ss.getSheetByName("ErrorLog");
if (!logSheet) {
logSheet = ss.insertSheet("ErrorLog");
}
logSheet.appendRow([new Date(), error.message, error.stack]);
}

function runWithErrorLogging() {
try {
// Some code that might fail
throw new Error("Simulated error for testing");
} catch (err) {
logErrorToSheet(err);
}
}