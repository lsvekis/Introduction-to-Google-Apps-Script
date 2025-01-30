function showModalDialog() {
const htmlOutput = HtmlService.createHtmlOutputFromFile("dialog")
.setWidth(300)
.setHeight(150);
SpreadsheetApp.getUi().showModalDialog(htmlOutput, "My Modal");
}