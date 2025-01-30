function onOpen() {
const ui = SpreadsheetApp.getUi();
ui.createMenu("Utilities")
.addItem("Show Toast", "showToastMessage")
.addToUi();
}

function showToastMessage() {
SpreadsheetApp.getActiveSpreadsheet().toast("Toast from custom menu!");
}