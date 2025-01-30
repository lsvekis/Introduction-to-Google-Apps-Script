function readSheetData() {
// Replace with your own spreadsheet ID
const ss = SpreadsheetApp.openById("YOUR_SPREADSHEET_ID");
const sheet = ss.getSheetByName("Sheet1");
const data = sheet.getRange(1, 1, 5, 3).getValues();

Logger.log("Data from rows 1-5, columns 1-3: " + JSON.stringify(data));
}