function avoidRepeatedAccess() {
const ss = SpreadsheetApp.getActiveSpreadsheet();
for (let i = 0; i < 5; i++) {
// Instead of: SpreadsheetApp.getActiveSpreadsheet() in each iteration
ss.toast("Loop iteration: " + (i + 1));
}
}