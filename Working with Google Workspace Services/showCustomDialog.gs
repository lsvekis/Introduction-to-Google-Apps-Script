function showCustomDialog() {
var html = HtmlService.createTemplateFromFile('dialog').evaluate();
SpreadsheetApp.getUi().showModalDialog(html, "Custom Dialog");
}