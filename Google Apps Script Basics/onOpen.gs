function onOpen() {
var ui = SpreadsheetApp.getUi();
ui.createMenu("My Menu")
.addItem("Say Hello", "sayHello")
.addToUi();
}

function sayHello() {
SpreadsheetApp.getActiveSpreadsheet().toast("Hello from Apps Script!");
}