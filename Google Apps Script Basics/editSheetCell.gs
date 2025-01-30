function editSheetCell() {
// Get the active spreadsheet
var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
// Set a value in cell A1
sheet.getRange("A1").setValue("Hello Sheets");
}