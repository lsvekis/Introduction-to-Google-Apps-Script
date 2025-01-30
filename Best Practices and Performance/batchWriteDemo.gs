function batchWriteDemo() {
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheetByName("DataSheet");

// Prepare a 2D array for writing to rows 1-3, columns 1-2
const data = [
["Name", "Score"],
["Alice", 95],
["Bob", 88]
];

// Single write operation
sheet.getRange(1, 1, data.length, data[0].length).setValues(data);
}