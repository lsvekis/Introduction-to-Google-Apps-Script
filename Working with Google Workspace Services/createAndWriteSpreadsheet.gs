function createAndWriteSpreadsheet() {
// Create a new spreadsheet
const ss = SpreadsheetApp.create("My Automated Sheet");
// Grab the first sheet
const sheet = ss.getSheets()[0];
// Write data in cell A1
sheet.getRange("A1").setValue("Hello Sheets!");
}