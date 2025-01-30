function onOpen() {
const ui = SpreadsheetApp.getUi();
ui.createMenu("Utilities")
.addItem("Say Hello", "sayHello")
.addToUi();
}

function sayHello() {
SpreadsheetApp.getActiveSpreadsheet().toast("Hello from onOpen!");
}