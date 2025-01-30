function onOpen() {
const ui = SpreadsheetApp.getUi();
ui.createMenu("More Tools")
.addItem("Open Dialog", "openCustomDialog")
.addToUi();
}

function openCustomDialog() {
const htmlOutput = HtmlService.createHtmlOutput("<h2>Custom Dialog via Menu</h2>")
.setWidth(300)
.setHeight(150);
SpreadsheetApp.getUi().showModalDialog(htmlOutput, "My Custom Dialog");
}