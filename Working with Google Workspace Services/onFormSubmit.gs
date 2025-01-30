function onFormSubmit(e) {
// e.namedValues holds the form data in an object
var timestamp = e.namedValues["Timestamp"];
var answer1 = e.namedValues["Question 1"];

var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("FormResponses");
sheet.appendRow([timestamp, answer1]);

Logger.log("New response added at " + new Date());
}